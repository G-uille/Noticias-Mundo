import React from "react";
import logo from "../../assets/images/logo.png";
import Searcher from "../Searcher/Searcher.tsx";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {

    const navigate = useNavigate();

    const handleLogoClic = async ()  => {
        navigate("/inicio");
    }

    return (
        <div className="container-navbar">

            <img
                alt="Logo Inicio"
                src={logo}
                className="navbar__img"
                onClick={handleLogoClic}
            />
            <Searcher />
        </div>
    )
};

export default Navbar;