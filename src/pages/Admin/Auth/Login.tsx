import { Link } from "react-router-dom";
import { AuthLayout } from "UI/Admin/AuthLayout";
import logo from "assets/images/logo.png";
import LoginForm from "components/Admin/auth/LoginForm";
import facebookIcon from "assets/icons/facebook.svg";
import snapIcon from "assets/icons/snapchat.svg";
import twitterIcon from "assets/icons/twitter.svg";

const Login = () => {
  return (
    <>
      <AuthLayout>
        <header className="w-full flex items-center flex-col gap-3 mt-6 z-30">
          <div className="flex justify-center gap-3">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-10/12 h-[1px] mt-21 mb-44 ml-120 transform rotate-360 bg-gradient-to-r from-red-200 via-red-500 to-red-200"></div>
        </header>
        <LoginForm />
        <footer className="w-full h-[150px] flex justify-center items-center flex-col">
          <div className="w-10/12 h-[1px] ml-120 transform rotate-360 bg-gradient-to-r from-red-200 via-red-500 to-red-200"></div>
          <div className="flex w-1/2 justify-center gap-7 my-7">
            <Link to={"#"}>
              <img src={facebookIcon} alt="icon" />
            </Link>
            <Link to={"#"}>
              <img src={snapIcon} alt="icon" />
            </Link>
            <Link to={"#"}>
              <img src={twitterIcon} alt="icon" />
            </Link>
          </div>
        </footer>
      </AuthLayout>
    </>
  );
};

export default Login;
