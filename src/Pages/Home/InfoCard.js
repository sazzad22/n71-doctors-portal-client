import React from "react";

const InfoCard = ({ img, bgClass, cardTitle }) => {
  return (
    <div
      className={`hover:transition-all card lg:card-side bg-base-100 drop-shadow-md hover:transition-all duration-200 hover:drop-shadow-xl ease-in ${bgClass} text-white  `}
    >
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
