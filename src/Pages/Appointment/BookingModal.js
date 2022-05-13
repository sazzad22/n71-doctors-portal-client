import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const bookingInfo = {
      slot: event.target.slot?.value,
    };
    console.log(bookingInfo, _id, name);

    //this closes the modal
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          {/* cross btn */}
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-2xl  text-primary text-center mt-2 ">
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
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            {/* slot options */}
            <select name="slot" class="select select-primary w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              class="input input-bordered input-secondary w-full max-w-xs"
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
