import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userRole, setUserRole] = useState("");
  const CustomTextField = styled(TextField)(() => ({
    "& .MuiInputLabel-root": {
      color: "gray", // Default label color
      // fontSize: ".9rem",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#36A853", // Label color when focused
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#36A853", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#36A853", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "#36A853", // Focused border color
      },
    },
  }));
  const handleUserRole = (e) => {
    setUserRole(e.target.value);
  };

  const handleSignUp = () => {};
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-sm p-6 m-auto mx-auto backdrop-blur-xl border bg-gray-100 bg-opacity-60 rounded-lg  ">
          <div className="flex justify-center mx-auto ">
            <h3 className="text-3xl font-bold text-[#36A853]">Taskify</h3>
          </div>

          <form onSubmit={handleSignUp} className="mt-6">
            <div className="mt-4">
              <CustomTextField
                className="w-full bg-white "
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mt-4">
              <CustomTextField
                className="w-full bg-white "
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                required
              />
            </div>

            <div className="mt-4 relative">
              <CustomTextField
                className="w-full bg-white "
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
              />
            </div>

            <div className=" mt-4">
              <div className="flex items-center gap-4">
                <div className="form-control ">
                  <label className="label cursor-pointer flex gap-2">
                    <span className="label-text text-lg">Normal User</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-[#36A853]"
                      value={"Normal User"}
                      onChange={handleUserRole}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <span className="label-text text-lg">Admin</span>
                    <input
                      type="radio"
                      required
                      onChange={handleUserRole}
                      name="radio-10"
                      className="radio checked:bg-[#36A853]"
                      value="Admin"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full btn px-6 py-2.5 text-sm font-medium tracking-wide bg-[#36A853] text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Dont have an account?{" "}
            <Link
              to={"/signin"}
              className="font-medium text-[#36A853]  hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
