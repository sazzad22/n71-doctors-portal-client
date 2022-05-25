import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  /**
   ** 3 ways to store images
   ** 1. Third party storage //Free open public storage is ok for Practice project
   ** 2. Your own storage in your own server (file system)
   ** 3. Database: Mongodb
   *
   ** YUP: to validate file: Search: Yup file validation for react hook form
   */

  const imageStorageKey = "fc2e062670a7ceea15d576f8c2f69e32";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          //todo Send a doctor to db
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor Added successfully");
                reset();
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex  justify-center">
      <div className="w-1/2 my-10">
        <h2 className="text-4xl font-semibold text-primary">Add A Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Doctor name input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.name?.message}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="text-red-500 label-text-alt">
                  {errors.name?.message}
                </span>
              )}
            </label>
          </div>
          {/* Email input */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "An Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide A Valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.email?.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 label-text-alt">
                  {errors.email?.message}
                </span>
              )}
            </label>
          </div>
          {/* Specialty */}
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select class="select select-accent w-full max-w-xs">
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>

            <label className="label">
              {errors.specialty?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.specialty?.message}
                </span>
              )}
            </label>
          </div>
          {/* Photo  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input  input-bordered input-accent  w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.image?.message}
                </span>
              )}
            </label>
          </div>
          {/* Login Button */}
          <input
            className="btn btn-outline btn-primary w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
