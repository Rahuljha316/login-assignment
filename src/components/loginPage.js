import { useState } from "react";
import LoginForm from "./LoginForm";
import Form from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleLoginTabClick = () => {
    setIsVisible(true);
  };
  const handleSignUpTabClick = () => {
    setIsVisible(false);
  };

  const getLoginClassName = ()=>{
   
    if(isVisible) {
      return "inline-block font-bold w-1/2 p-4 border-b-2 border-reddish "
      
    }
      return "inline-block text-white-100 w-1/2 p-4 "

    
  }
  const getSignUpClassName = ()=>{
    
    if(!isVisible) {
      return "inline-block font-bold w-1/2 p-4 border-b-2 border-reddish "
      
    }
      return "inline-block text-white-100 w-1/2 p-4  "

    
  }
  return (
    <div>
      <>
        <div className="mb-4  ">
          <div className="flex mb-8">
            <button
              className={getLoginClassName()}
              type="button"
              role="tab"
              onClick={() => handleLoginTabClick()}
            >
              Login
            </button>

            <button
              className={getSignUpClassName()}
              id="dashboard-tab"
              type="button"
              role="tab"
              onClick={() => handleSignUpTabClick()}
            >
              SignUp
            </button>
          </div>

          {isVisible ? <LoginForm /> : <SignUpForm />}
        </div>
      </>
    </div>
  );
};

export default LoginPage;
