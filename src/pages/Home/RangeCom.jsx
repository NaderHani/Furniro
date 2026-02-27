import React, { useEffect, useState } from "react";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
export default function RangeCom() {
  const [ranges, setRanges] = useState([]);
  let range = [
    { image: home1, title: "Dining" },
    { image: home2, title: "Living" },
    { image: home3, title: "Bedroom" },
  ];
  useEffect(() => {
    setRanges(range);
  }, []);
  return (
    <>
      {ranges.map((item) => (
        <div className="col-md-4 col-sm-1">
          <div className="text-center m-auto fw-bold">
            <img src={item.image} alt="" className="w-100" />
            <p className="py-3"> {item.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}
