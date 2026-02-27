import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Meubel House_Logos-05.png"
export default function Navbar() {
  return (
    <>
      <nav className="container navbar navbar-expand-md navbar-light bg-light">
        <img src={logo} alt="" width={30} />
        <Link className="navbar-brand ms-2 fw-bold" href="/">
          Furniro
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item mx-3 fw-medium">
              <Link className="nav-link active" href="/" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-3 fw-medium">
              <Link className="nav-link" to="">
                Shop
              </Link>
            </li>
            <li className="nav-item mx-3 fw-medium">
              <Link className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item mx-3 fw-medium">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
