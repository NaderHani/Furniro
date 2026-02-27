import React from "react";
import "./Home.css";
import mainimage from "../../assets/MaskGroup.png";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
export default function Home() {
  return (
    <>
      <main>
        <img src={mainimage} alt="" className="w-100 " />
        {/* <div className=" d-felx align-content-center">
            <div className="border w-50 p-5">
              <span>New Arrival</span>
              <h2>Discover Our New Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button>BUY Now</button>
            </div>
          </div> */}
      </main>
      <div className="container">
        <section>
          <div className="w-100 m-auto text-center my-5 ">
            <h3 className="fw-bold">Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-1">
              <div className="text-center m-auto fw-bold">
                <img src={home1} alt="" className="w-100" />
                <p className="py-3"> Dining</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-1">
              <div className="text-center m-auto fw-bold">
                <img src={home2} alt="" className="w-100" />
                <p className="py-3"> Living</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-1">
              <div className="text-center m-auto fw-bold">
                <img src={home3} alt="" className="w-100" />
                <p className="py-3"> Bedroom</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="m-auto text-center my-4 ">
            <h3 className="fw-bold ">Our Products</h3>
          </div>
          <div className="row g-5 my-4">
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image1} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image2} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="main-product">
                <div className="hover-main-product"></div>
                <div className="rounded-4">
                  <img src={image3} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image4} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image5} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image6} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image7} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="w-100">
                <div className="rounded-4">
                  <img src={image3} alt="" className="w-100 rounded-top-3" />
                </div>
                <div className="bg-light p-4 rounded-bottom-3">
                  <p>Syltherine</p>
                  <p>Stylish cafe chair</p>
                  <div className="d-flex justify-content-between">
                    <p>Rp 2.500.000</p>
                    <span className="text-muted">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}
