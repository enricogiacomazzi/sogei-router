import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";


export const Navbar = () => {

    const nav = useNavigate();

    const gotoPag2 = () => {
        nav('/pag2');
    }


    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to={'/'} className="nav-link">Pokemon</Link>
                </li>
                <li className="nav-item">
                <button className="nav-link" onClick={gotoPag2}>pag 2</button>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}