import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="pt-20"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero mt-5 min-h-screen ">
        <div className=" grid  grid-cols-1 ">
          <h2 className="text-5xl text-center  font-semibold text-primary col-span-2 ">
            Pick An Appointment Date
          </h2>

          <div className="grid my-12 lg:grid-cols-2 grid-cols-1 justify-items-center mx-auto">
          <img src={chair} className=" my-10 lg:my-0 w-sm px-5 lg:px-0  lg:max-w-lg rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
