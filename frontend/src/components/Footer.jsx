import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <header className="py-6 bg-indigo-950 text-white shadow-gray-400 shadow-lg">
            <div className="container mx-auto px-2">
                <div className="flex justify-between items-center">
                    <div>
                    <h1 className="text-3xl font-semibold">
                        <Link to='/'>Thanks for visiting</Link>
                    </h1>
                    <p className="text-xl">
                        This is a blog website providing latest news on Technology, Entertainment, Health etc.
                    </p><br/>
                    <p className="text">
                        © 2025 NewsBlogs. All Rights Reserved.
                    </p>
                    </div>
                    <nav>
                        <ul className="flex justify-between gap-1 text-2xl items-center">
                            <li className="dark:hover:bg-indigo-600 px-5 py-2.5 rounded-lg text-white">
                                <Github />
                            </li>
                            

                            <li className="dark:hover:bg-indigo-600 px-5 py-2.5 rounded-lg">
                                <Linkedin />
                            </li>
                            <li className="dark:hover:bg-indigo-600 px-5 py-2.5 rounded-lg">
                                <Instagram />
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default Footer;
