import React from "react";
import exp1 from "../../assets/exp1.png";
import exp2 from "../../assets/exp2.png";
import { ArrowRight } from "lucide-react";
export default function ExploreCom() {
  return (
    <>
      <div className="container">
        <div className=" row">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100 p-5">
              <div>
                <h2 className="fw-bold text-muted">
                  50+ Beautiful rooms inspiration
                </h2>
                <p>
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <button className="exploreBtn">Explore More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="p-4 exploreImage">
                <img src={exp1} className="w-100" alt="" />
                <div className="exploreContent">
                  <p>01 - Bed Room</p>
                  <h3>Inner Peace</h3>
                </div>
                <div className="exploreContent2">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="py-5">
              <div>
                <img src={exp2} alt="" className="w-75" />
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
