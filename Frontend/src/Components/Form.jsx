import { Eye, EyeOff, MessageSquareQuote } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Form = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.fullname.trim() && type === "signup") {
      return toast.error("Full name is required");
    }
    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return toast.error("Invalid email format");
    }
    if (!formData.password) {
      return toast.error("Password is required");
    }
    if (formData.password < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Yee");
    const validation = validateForm();
    if (!validation) {
      return; // Stop further execution if validation fails
    }
    console.log("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="text-center">
      <div className="w-full flex justify-center my-10">
        <div className="square rounded-2xl size-20 bg-primary/10 flex justify-center flex-col btn btn-ghost">
          <MessageSquareQuote color="yellow" size={40} />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl">
          {type === "signup" ? "Create an Account" : "Welcome Back"}
        </h2>
      </div>
      <div className="mb-8">
        <p>
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <Link
            to={type === "signup" ? "/login" : "/signup"}
            className="hover:text-yellow-200"
          >
            {type === "signup" ? "LogIn" : "SignUp"}
          </Link>
        </p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <div className="max-w-md">
            {type === "signup" ? (
              <label className="input input-bordered flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setFormData({ ...formData, fullname: e.target.value });
                  }}
                />
              </label>
            ) : (
              ""
            )}
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                className="grow"
                placeholder="Password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
              <button
                className="btn btn-xs bg-transparent"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </label>
            <button
              type="submit"
              className="btn bg-yellow-400 w-full text-black hover:text-slate-200"
            >
              {type === "signup" ? "Sign Up" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
