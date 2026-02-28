
import CardCom from "./CardCom";
import "./Home.css";
import RangeCom from "./RangeCom";
import ExploreCom from "./ExploreCom";
import FuniroGallery from "./Funiroiture";
export default function Home() {
  return (
    <>
      <main>
        <div className="heroImage">
          <div className="heroContent">
            <span>New Arrival</span>
            <h2>Discover Our New Collection</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button>BUY Now</button>
          </div>
        </div>
      </main>
      <div className="container">
        <section>
          <div className="w-100 m-auto text-center my-5">
            <h3 className="fw-bold">Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
            <RangeCom />
          </div>
        </section>
        <section>
          <div className="m-auto text-center my-4 ">
            <h3 className="fw-bold ">Our Products</h3>
          </div>
          <CardCom />
          <div className="my-5 m-auto w-100 text-center">
            <button className="product-addMore">Show More</button>
          </div>
        </section>
      </div>
      <section className="exploreSection">
        <ExploreCom />
      </section>
      <section className="border-bottom">
        <FuniroGallery />
      </section>
    </>
  );
}
