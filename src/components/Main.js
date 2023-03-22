import Logo from "../assets/reactLogo.png";
import GoogleLogo from "../assets/googleLogo.svg";
import FacebookLogo from "../assets/facebookLogo.svg";
import TwitterLogo from "../assets/twitterLogo.svg";
import LoginPage from "./loginPage";

const Main = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col items-center max-w-sm">
        <img alt="Logo" src={Logo} />
        <div className="text-center mb-10">
          <p>SOME RANDOM TEXT, SOME RANDOM </p>
          <p>TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
        </div>
        <div>
          <LoginPage />

          <h4 className="text-xs text-center text-login mb-4">or login with</h4>
        </div>
        <div>
          <div className=" h-6 mb-5 flex justify-around">
            <img alt="google" className="" src={GoogleLogo} />
            <img alt="facebook" src={FacebookLogo} />
            <img alt="twitter" src={TwitterLogo} />
          </div>
          <div className="text-center text-xs mb-5">
            Don't have an account?<a className="text-reddish">Create new now!</a>
          </div>
          <div className="text-center text-xs mb-2">
            By signing up, you agree with our <a className="text-reddish underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
