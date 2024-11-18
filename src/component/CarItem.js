import React from "react";

const CarItem = ({ myCar }) => {
  return (
    <div>
      <p>{myCar.name}</p>
      <img className="Image-width" src={myCar.image} />
      <p>{myCar.cost}</p>
    </div>
  );
};

export default CarItem;
