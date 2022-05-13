import React from "react";

const Service = ({ service,setTreatment }) => {
    const { name, slots } = service;

  return (
    <div class="card lg:max-w-md bg-base-100 shadow-xl hover:scale-105 transition ease-in-out duration-500">
      <div class="card-body">
              <h2 class="card-title text-xl font-bold text-secondary">{name}</h2>
              <p>{
                  slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-400">Try Another day</span>
              }</p>
              <p>{slots.length} spaces available</p>
        <div class="card-actions justify-center">
          
          <label for="booking-modal" disabled={slots.length === 0} className="btn btn-secondary font-semibold text-white hover:scale-105 transition ease-in-out duration-500" onClick={(() => setTreatment(service))}>Buy Now</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
