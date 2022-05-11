import React from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen   "
      style={{
        backgroundImage: `url(${bgChair})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
