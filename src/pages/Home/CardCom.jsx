import React, { useEffect, useState } from 'react'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import './Home.css'
import { FlagTriangleRight,GitCompareIcon, Share } from 'lucide-react';
export default function CardCom() {
        let product = [
          {
            title: "Syltherine",
            image: image1,
            descrption: "Stylish cafe chair",
            price: "Rp 2.500.000",
            discount: "Rp 3.500.000",
          },
          {
            title: "Leviosa",
            image: image2,
            descrption: "Stylish cafe chair",
            price: "Rp 2.500.000",
            discount: null,
          },
          {
            title: "Lolito",
            image: image3,
            descrption: "Luxury big sofa",
            price: "Rp 7.000.000",
            discount: "Rp 14.000.000",
          },
          {
            title: "Respira",
            image: image4,
            descrption: "Outdoor bar table and stool",
            price: "Rp 500.000",
            discount: null,
          },
          {
            title: "Grifo",
            image: image5,
            descrption: "Night lamp",
            price: "Rp 1.500.000",
            discount: null,
          },
          {
            title: "Muggo",
            image: image6,
            descrption: "Small mug",
            price: "Rp 150.000",
            discount: null,
          },
          {
            title: "Pingky",
            image: image7,
            descrption: "Cute bed set",
            price: "Rp 7.000.000",
            discount: "Rp 14.000.000",
          },
          {
            title: "Potty",
            image: image4,
            descrption: "Minimalist flower pot",
            price: "Rp 500.000",
            discount: null,
          },
        ];
        const [products,setProducts] = useState([])
        useEffect(()=>{setProducts(product);},[])

  return (
    <>
      <div className="row g-5 my-4">
        {products.map((item) => (
          <div className="col-md-3">
            <div className="w-100 card">
              <div>
                <div className="card-image">
                  <img src={item.image} alt="" className="w-100" />
                </div>
              </div>
              <div className="bg-light p-4 rounded-bottom-3">
                <p className="fw-bold">{item.title}</p>
                <p>{item.descrption}</p>
                <div className="d-flex justify-content-between">
                  <p>{item.price}</p>
                  <span className="text-muted text-decoration-line-through">
                    {item.discount}
                  </span>
                </div>
              </div>
              <div className="hoverd-card">
                <div>
                  <button className="cart-btn"> Add to cart</button>
                </div>
                <div className="d-felx justify-content-between text-white">
                  <Share className="mx-2"/>
                  <GitCompareIcon className="mx-2"/>
                  <FlagTriangleRight className="mx-2"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
