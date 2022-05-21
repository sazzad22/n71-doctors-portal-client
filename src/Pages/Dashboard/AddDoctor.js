import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email input */}
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
        {/* password */}
        <div className="form-control w-full max-w-xs mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="Specialty"
            className="input input-bordered input-accent w-full max-w-xs"
            {...register("specialty", {
              required: {
                value: true,
                message: "Specialty is Required",
              },
              minLength: {
                value: 6,
                message: "Provide A 6 character password",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="text-red-500 label-text-alt">
                {errors.password?.message}
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500 label-text-alt">
                {errors.password?.message}
              </span>
            )}
          </label>
        </div>
        {/* Login Button */}
        <input
          className="btn btn-outline btn-accent w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
