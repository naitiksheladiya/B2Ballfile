import React, { useState } from 'react';
import '../src/css/Sidebar.css'; // Import your CSS file
import { FaBars, FaUser } from 'react-icons/fa';
import { SlLogout } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoColorPalette } from "react-icons/io5";


const YourComponent = () => {
        const [isNavbarOpen, setNavbarOpen] = useState(false);

        const toggleNavbar = () => {
                setNavbarOpen(!isNavbarOpen);
        };

        const closeNavbar = () => {
                setNavbarOpen(false);
        };

        return (
                <>
                        <nav className={isNavbarOpen ? 'open' : ''}>
                                <div className="logo" onClick={toggleNavbar}>
                                        <i className={`bx ${isNavbarOpen ? 'bx-x' : 'bx-menu'} menu-icon`}>
                                                <FaBars />
                                        </i>
                                        <span className="logo-name">CodingLab</span>
                                </div>
                                <div className="sidebar">
                                        {/* Sidebar content goes here */}
                                        <div className="logo" onClick={closeNavbar}>
                                                <i className="bx bx-menu menu-icon"></i>
                                                <FaBars />
                                                <span className="logo-name">CodingLab</span>
                                        </div>

                                        <div className="sidebar-content">
                                                <ul className="lists">
                                                        <a href="Adduser" className="nav-link boderr" >
                                                                <i className="bx bx-cog icon">
                                                                        {isNavbarOpen ? <FaUser /> : <FaUser />}
                                                                </i>
                                                                <span className="link">Add User</span>
                                                        </a>
                                                        <a href="category" className="nav-link boderr">
                                                                <i className="bx bx-cog icon">
                                                                        {isNavbarOpen ? <BiSolidCategoryAlt />
                                                                                : <BiSolidCategoryAlt />
                                                                        }
                                                                </i>
                                                                <span className="link">Category</span>
                                                        </a>
                                                        <a href="color" className="nav-link boderr">
                                                                <i className="bx bx-cog icon">
                                                                        {isNavbarOpen ? <IoColorPalette />
                                                                                : <IoColorPalette />
                                                                        }
                                                                </i>
                                                                <span className="link">Color</span>
                                                        </a>
                                                        <a href="catalog" className="nav-link boderr">
                                                                <i className="bx bx-cog icon">
                                                                        {isNavbarOpen ? <MdLibraryBooks />
                                                                                : <MdLibraryBooks />
                                                                        }
                                                                </i>
                                                                <span className="link"> Catalog</span>
                                                        </a>
                                                        <a href="#" className="nav-link boderr">
                                                                <i className="bx bx-cog icon">
                                                                        {isNavbarOpen ? <FaCartShopping />
                                                                                : <FaCartShopping />
                                                                        }
                                                                </i>
                                                                <span className="link"> Order</span>
                                                        </a>
                                                        <a href="#" className="nav-link boderr">
                                                                <i className="bx bx-cog icon">
                                                                        {isNavbarOpen ? <IoBarChartSharp />
                                                                                : <IoBarChartSharp />
                                                                        }
                                                                </i>
                                                                <span className="link"> DashBord</span>
                                                        </a>


                                                </ul>

                                                <div className="bottom-content">
                                                        <li className="list">
                                                                <a href="#" className="nav-link">
                                                                        <i className="bx bx-cog icon">

                                                                        </i>
                                                                        <span className="link">Settings</span>
                                                                </a>
                                                        </li>
                                                        <li className="list">
                                                                <a href="#" className="nav-link">
                                                                        <i className="bx bx-log-out icon"></i>
                                                                        <SlLogout />
                                                                        <span className="link logout">Logout</span>
                                                                </a>
                                                        </li>
                                                </div>
                                        </div>
                                </div>
                        </nav>

                        <section className="overlay" onClick={closeNavbar}></section>
                </>
        );
};

export default YourComponent;

