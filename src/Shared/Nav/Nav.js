import React, { useContext } from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/SimlePhotography.jpg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="">
      <div className="navbar bg-primary text-primary-content  sm:px-20 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/my-reviews">My Reviews</Link>
                  </li>
                  <li>
                    <Link to="/add-service">Add Service</Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <div className=" ">
                  {user?.email ? (
                    <>
                      <img
                        className=" mask mask-circle w-12 h-12 sm:ml-4"
                        src={user.photoURL}
                        alt=""
                      />
                      <button onClick={handleLogOut} className="btn">
                        LogOut
                      </button>
                    </>
                  ) : (
                    <Link to="/login" className="btn">
                      Login
                    </Link>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={photo} className="h-12 w-14 mr-3 rounded-xl" alt="" />{" "}
            Smile Photography
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/my-reviews">My Reviews</Link>
                </li>
                <li>
                  <Link to="/add-service">Add Service</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden sm:block">
            <div className="flex gap-2">
              {user?.email ? (
                <>
                  <img
                    className=" mask mask-circle w-12 h-12 sm:ml-4"
                    src={user.photoURL}
                    alt=""
                  />
                  <button onClick={handleLogOut} className="btn">
                    LogOut
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
