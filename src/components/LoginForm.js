const LoginForm = () => {
  return (
    <form className="flex flex-col ">
      <input
        placeholder="Email Address"
        type="text"
        className=" pl-4 rounded-full border-solid border-2 border-input h-10 w-72 p-2 m-2"
      />
      <input
        placeholder="Password"
        type="text"
        className=" pl-4 rounded-full border-solid  border-2 border-input  h-10 w-72 p-2 m-2"
      />
      <button className="mt-5 pl-4 rounded-full  h-10 w-72 p-2 m-2  bg-reddish text-white">
        LOGIN
      </button>
      <a className="text-end text-reddish text-sm">Forget Password?</a>
    </form>
  );
};

export default LoginForm;
