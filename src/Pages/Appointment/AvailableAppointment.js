import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-4xl font-semibold my-5 text-center" >Available Appointments on {format(date, "dd MM")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10 ">
        {services.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
        ))}
      </div>
      {treatment &&
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
