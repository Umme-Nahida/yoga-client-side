import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-[1210px] mx-auto px-4 py-4 ">
            <div className=" flex items-center justify-between ">
                <div className="lg:block navbar-start">
                    <img className="w-14" src="https://i.ibb.co/gSYxzQF/yoga-logo-F2-E1-D2844-B-seeklogo-com.png" alt="" />

                </div>
                <div className="navbar-center">
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
                <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/ygnXDBZ/me01-1.jpg" />
                        </div>
                    </label>
                </div>
                    <a className="btn rounded-full py-2 px-6 text-[#49CF9E]">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;