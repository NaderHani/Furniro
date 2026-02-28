import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="container border-bottom py-5 my-4">
        <div className="row">
          <div className="col-md-3 mt-3">
            <div>
              <h3 className="fw-bold">Funiro.</h3>
              <p className="text-muted mt-4">
                400 University Drive Suite 200 Coral Gables,
                <span>FL 33134 USA</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <p className="text-muted">Links</p>
            <div className="text-decration-none d-flex justify-content-between flex-column">
              <Link className="mt-3 text-black fw-medium text-decoration-none">
                Home
              </Link>
              <Link className="mt-3 text-black fw-medium text-decoration-none">
                Shop
              </Link>
              <Link className="mt-3 text-black fw-medium text-decoration-none">
                About
              </Link>
              <Link className="mt-3 text-black fw-medium text-decoration-none">
                contact
              </Link>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <p className="text-muted">Help</p>
            <div className="text-decoration-none d-flex justify-content-between flex-column">
              <Link className="mt-3 text-decoration-none text-black fw-medium">
                Payment Options
              </Link>
              <Link className="mt-3 text-decoration-none text-black fw-medium">
                Returns
              </Link>
              <Link className="mt-3 text-decoration-none text-black fw-medium">
                Privacy Policies
              </Link>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <p className="text-muted">Privacy Policies</p>
            <div className="d-flex flex-wrap mt-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="input-footer"
              />
              <button className="btn-footer">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="my-3 container">
        <p>2023 furino. All rights reverved</p>
      </div>
    </>
  );
}
