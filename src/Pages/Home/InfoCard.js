import React from "react";

const InfoCard = ({ img, bgClass, cardTitle }) => {
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-md hover:drop-shadow-2xl ${bgClass} text-white  `}
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
