import { ReactSVG } from "react-svg";
import Arrow from "assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Title = ({
  children,
  previousURL,
  addButton,
}: {
  children: React.ReactNode;
  previousURL?: string;
  addButton?: React.ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 xl:gap-4 items-center">
        {previousURL && (
          <ReactSVG
            src={Arrow}
            className="cursor-pointer"
            onClick={() => {
              navigate(previousURL);
            }}
          />
        )}
        <div className="text-[2.625rem] font-bold leading-[1.5] text-right text-white ">
          {children}
        </div>
      </div>
      {addButton}
    </div>
  );
};

export default Title;
