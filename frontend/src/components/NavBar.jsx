import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ setSelectedCategory }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
};

const handleCategoryClick = (category) => {
  setDropdownOpen(false);
  setTimeout(() => {
    setSelectedCategory(""); 
    setTimeout(() => {
      setSelectedCategory(category);
      navigate("/");
    }, 0);
    setDropdownOpen(false);
  }, 0);
};

    return (
        <header className="py-4 bg-blue-500 text-white fixed top-0 z-20 w-full shadow-gray-400 shadow-lg">
            <div className="container mx-auto px-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">
                        <Link to='/'>News</Link>
                    </h1>
                    <nav setSelectedCategory={setSelectedCategory}>
                        <ul className="flex justify-between gap-1 text-2xl items-center">
                            {token ? (

                                <>
                                    <li className="dark:hover:bg-blue-600 px-5 py-2.5 rounded-lg">
                                        <NavLink to="/">Blogs</NavLink>
                                    </li>
                                    <li className="relative">
                                        <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-500 dark:hover:bg-blue-600">
                                            Categories
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="dropdown" className= {`absolute z-50 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 ${dropdownOpen ? "" : "hidden"}`}>
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategoryClick('All')}>All</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 w-full items-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategoryClick('Entertainment')}>Entertainment</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategoryClick('Business')}>Business</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategoryClick('Technology')}>Technology</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategoryClick('Politics')}>Politics</button>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategoryClick('Health')}>Health</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="dark:hover:bg-blue-600 px-5 py-2.5 rounded-lg">
                                        <NavLink to="/create">Create Blog</NavLink>
                                    </li>
                                    <li className="dark:hover:bg-blue-600 px-5 py-2.5 rounded-lg">
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                    <li className="dark:hover:bg-blue-600 px-5 py-2.5 rounded-lg">
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </>
                                    ) : (
                                    <>
                                        <li className="px-4 py-2 hover:bg-blue-600 rounded-lg">
                                            <NavLink to="/login">Login</NavLink>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-blue-600 rounded-lg">
                                            <NavLink to="/register">Register</NavLink>
                                        </li>
                                    </>
                                )}

                                </ul>

                    </nav>
                </div>

            </div>
        </header>
    );
};

export default NavBar;
