import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone?.value,
    };
    fetch("https://radiant-temple-40996.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log("data success");
          toast(`Appointment set on ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already booked on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        //this closes the modal
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* cross btn */}
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl  text-primary text-center mt-2 ">
            {" "}
            <span className="text-accent">Treatment:</span> {name}
          </h3>
          {/* Inputs */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center mt-10 mb-5"
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            {/* slot options */}
            <select
              name="slot"
              className="select select-primary w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              disabled
              name="name"
              type="text"
              value={user.displayName}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              disabled
              name="email"
              type="text"
              value={user.email}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              className="btn btn-secondary w-full max-w-xs text-white font-bold drop-shadow-lg"
              name=""
              id=""
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
