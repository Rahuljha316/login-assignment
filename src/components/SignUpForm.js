const SignUpForm = () => {
  return (
    <form className="flex flex-col ">
      <input
        placeholder="Email Address"
        type="text"
        className=" pl-4 rounded-full border-solid border-2 border-input h-10 w-72 m-2 p-2"
      />
      <input
        placeholder="Password"
        type="text"
        className="pl-4 rounded-full border-solid border-2 m-2 p-2 border-input h-10 w-72"
      />
      <input
        placeholder=" Confirm Password"
        type="text"
        className=" pl-4 rounded-full border-solid border-2 m-2 border-input h-10 w-72"
      />
      <button className=" mt-5 rounded-full  h-10 w-72 p-2 m-2 bg-reddish text-white">
        SIGNUP
      </button>
    </form>
  );
};
export default SignUpForm;
