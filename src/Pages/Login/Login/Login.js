import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import photo from "../../../assets/Smile.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../../Hooks/useTitle";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  //dynamic page title
  useTitle("login");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //handle google login auth
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        // get jwt token
        fetch("https://assignment-11-server-lime.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set jwt token in local storage
            localStorage.setItem("token", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        // get jwt token
        fetch("https://assignment-11-server-lime.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set jwt token in local storage
            localStorage.setItem("token", data.token);
          });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero w-full my-32 ">
        <div className="hero-content grid gap-5 sm:gap-20 md:grid-cols-2 flex-row-reverse md:flex-row">
          <div className="text-center lg:text-left ">
            <img className="w-3/4 h-full hidden sm:block" src={photo} alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center pb-2">
              New at Smile Photography?
              <Link to="/signup" className="text-blue-600 font-bold">
                SignUp
              </Link>
            </p>
            <h1 className="text-2xl text-center">OR</h1>
            <div className="btn-group btn-group-vertical mb-10 mx-6">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary mt-2"
              >
                <FaGoogle className="mr-3 w-6 h-6" /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
