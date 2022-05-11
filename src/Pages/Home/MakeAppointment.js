import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
      <section
          style={{background:`url(${appointment})`}}
          className="flex justify-center items-center my-32 ">
      <div className="flex-1 hidden lg:block">
        <img src={doctor} className='mt-[-100px]' alt="Male Doctor" />
      </div>
      <div className="flex-1 p-5">
        <p className="text-xl text-secondary">Appointment</p>
        <h3 className="text-3xl text-white">Make an Appointment Today</h3>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam eum
          libero repudiandae nam, totam veniam vitae perspiciatis architecto
          iusto, quaerat amet illo, numquam minus. Animi itaque quibusdam
          inventore maiores praesentium.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
