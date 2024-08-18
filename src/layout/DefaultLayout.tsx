import React from "react";
import Navbar from "../components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import tierra from "../assets/images/tierra.png";

const DefaultLayout: React.FC = () => {
    
    return (
        <div className="container-default-layout">
            <div className="navbar-whit-logo">
            <Navbar />
            <div className="container-img__tierra">
            <img alt="logo" src={tierra} className="layout-tierra"/>

            </div>
            </div>
            <section className="default-layout__section"  id="popularSection">
                <Outlet />
            </section>
        </div>
    )
};

export default DefaultLayout;