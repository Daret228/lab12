// ИМПОРТЫ
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../images/logo.svg";
import calculator from "../images/calculation.svg";
import measer from "../images/measering.svg";
import Services from "../pages/Services";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";
import FAQ from "../pages/FAQ";
import Contacts from "../pages/Contacts";

// КОМПОНЕНТ НАВИГАЦИИ
const Nav = () => {
    return (
        //Одностраничность ON(SPA)
        <Router>
            <header className={styles.navbar}>
                {/* ЛОГОТИП */}
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>

                {/* НАВИГАЦИЯ */}   
                <nav className={styles.navLinks}>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        FAQ
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        Contacts
                    </NavLink>
                </nav>

                {/* КНОПКИ */}
                <div className={styles.buttons}>
                    <button className={styles.requestButton}>
                        <img src={measer} alt="Measer" />
                        Make request
                    </button>

                    <button className={styles.calculationButton}>
                        <img src={calculator} alt="Calculation" />
                        Calculation
                    </button>
                </div>

            </header>

            {/* РАЗДЕЛЫ СТРАНИЦЫ (ПЕРЕКЛЮЧЕНИЕ)*/}    
            <Routes>
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/" element={<Services />} />
            </Routes>
        </Router>
    );
};

export default Nav;
