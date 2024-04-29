import Title from "components/shared/Title";
import { useEffect, useState } from "react";
import { getUsers } from "services/Admin/usersService";

function createData(
  id: number,
  name: string,
  phone: string,
  email: string,
  age: string,
  created_at: string
) {
  return {
    id,
    name,
    phone,
    email,
    age,
    created_at,
  };
}

const rows = [
  createData(
    1,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
  createData(
    2,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
  createData(
    3,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
  createData(
    4,
    "نائف عبدالله الديرة",
    "+977743278",
    "naifuiux@gmail.com",
    "25",
    "2024/5/15"
  ),
];

const UsersTable = () => {
  const [row, setRows] = useState([]);
  console.log(row);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        console.log(users);
        setRows(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      <Title>قائمة طلبات التسجيل</Title>
      <Title>Bla Bla</Title>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#1a1d1f] min-w-0 flex flex-col justify-start items-stretch mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-80 mt-42 pb-24 rounded-lg text-white">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-[#1a1d1f] dark:text-[#81858d]">
            <tr>
              <th scope="col" className="px-6 py-3">
                الاسم الثلاثي
              </th>
              <th scope="col" className="px-6 py-3">
                رقم الهاتف
              </th>
              <th scope="col" className="px-6 py-3">
                البريد الالكتروني
              </th>
              <th scope="col" className="px-6 py-3">
                العمر
              </th>
              <th scope="col" className="px-6 py-3">
                تاريخ الطلب
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-[#1a1d1f] even:bg-gray-50 even:dark:bg-[#272b304d] text-[#f3f3f4] border-0"
              >
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.phone}</td>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4">{row.age}</td>
                <td className="px-6 py-4">{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
