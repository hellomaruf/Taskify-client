import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContaxt } from "../Services/AuthProvider";

function SignIn() {
  const { signInUser,googleLogin } = useContext(AuthContaxt);
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
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

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          toast.success("Successfully SignIn!");
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin();
    navigate(from);
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center ">
        <div className="w-full max-w-sm p-6 m-auto mx-auto backdrop-blur-xl border bg-gray-100 bg-opacity-60 rounded-lg  ">
          <div className="flex justify-center mx-auto ">
            <h3 className="text-3xl font-bold text-[#36A853]">Taskify</h3>
          </div>

          <form onSubmit={handleSignInUser} className="mt-6">
            <div className=" mt-4">
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
            <div className="mt-4">
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

            <div className="mt-6">
              <button className="w-full btn px-6 py-2.5 text-sm font-medium tracking-wide bg-[#36A853] text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              or login with Social Media
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div className="flex items-center mt-6 ">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="flex btn items-center justify-center w-full px-6 py-2  text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className=" mx-2 ">Sign in with Google</span>
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Dont have an account?{" "}
            <Link
              to={"/signup"}
              className="font-medium text-[#36A853]  hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
