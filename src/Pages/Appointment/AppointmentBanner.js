import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({date,setDate}) => {
  
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }
  return (
    <div
      className="pt-28"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-5xl text-center  font-semibold text-primary ">
        Fix An Appointment
      </h2>
      <div class="hero mt-20 min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse gap-28">
          <img src={chair} class="max-w-md rounded-lg shadow-2xl" />
          <div>
                      <DayPicker mode="single" selected={date} onSelect={setDate} footer={footer}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
