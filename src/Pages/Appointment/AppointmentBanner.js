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
      <div class="hero mt-5 min-h-screen ">
        <div class="hero-content grid lg:grid-cols-2 grid-cols-1 gap-28">
          <h2 className="text-5xl text-center  font-semibold text-primary col-span-2 ">
            Pick An Appointment Date
          </h2>

          <img src={chair} class="max-w-md rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
