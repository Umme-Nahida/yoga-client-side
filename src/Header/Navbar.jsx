import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.email)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const link = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        {
            user && <>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/team">Team</Link></li>
            </>
        }

    </>
    return (
        <div className="max-w-[1210px] mx-auto px-4 py-4 ">
            <div className=" flex items-center justify-between ">
                <div className="lg:block navbar-start">
                    <img className="w-14" src="https://i.ibb.co/gSYxzQF/yoga-logo-F2-E1-D2844-B-seeklogo-com.png" alt="" />

                </div>

                {/* dropdown menu list */}
                <div>
                    <details className="navbar-center dropdown  lg:hidden">
                        <summary className="m-1 btn"><HiOutlineMenu></HiOutlineMenu></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </details>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex flex-col md:flex-row lg:flex-row items-center text-lg text-[#49CF9E] lg:gap-8 md:gap-5 gap-3 ml-40 md:ml-64 lg:ml-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending border" : isActive ? "text-[#1BB7E8] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        {  // if user is logges so show the this route
                            user && <>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#1BB7E8] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                        }
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/team"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#1BB7E8] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                        }
                                    >
                                        Team
                                    </NavLink>
                                </li>

                            </>
                        }
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#1BB7E8] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#1BB7E8] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex navbar-end">
                    <div className="flex items-center justify-center">
                        {
                            user ? <>
                                <p className="hidden lg:flex">{user?.email}</p>
                                <button className="btn btn-primary ml-5" onClick={handleSignOut}>Sign Out</button>
                            </> : <NavLink to="/login">
                                <button className="btn btn-primary ml-5" >login</button>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;