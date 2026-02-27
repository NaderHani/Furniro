import React from "react";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import CardCom from "./CardCom";
import "./Home.css"
import RangeCom from "./RangeCom";
export default function Home() {
  return (
    <>
      <main>
        <div className="heroImage">
          <div className="heroContent">
            <div className="child p-5">
              <span>New Arrival</span>
              <h2>Discover Our New Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button>BUY Now</button>
            </div>
          </div>
        </div>
      </main>
      <div className="container">
        <section>
          <div className="w-100 m-auto text-center my-5 ">
            <h3 className="fw-bold">Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
           <RangeCom/>
          </div>
        </section>
        <section>
          <div className="m-auto text-center my-4 ">
            <h3 className="fw-bold ">Our Products</h3>
          </div>
          <CardCom />
        </section>
        
      </div>
    </>
  );
}
