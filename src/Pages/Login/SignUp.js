import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    } = useForm();
    const navigate = useNavigate();

  let signUpError;

    if (gUser || user) {
        console.log(user);
      navigate('/login')
    
  }
  if (loading || gLoading ||updating) {
    return <Loading></Loading>;
  }

  if (error || gError ||uError) {
    signUpError = (
      <p>
        <small>{error?.message || gError?.message|| uError?.message }</small>
      </p>
    );
    }
    

  const onSubmit = async (data) => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({displayName:data.name})
    
  };

  return (
    <div className="flex items-center min-h-screen justify-center pt-20">
      <div className="card w-96 bg-base-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl text-accent ">Sign Up</h2>
          {/* form */}
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
                type="password"
                placeholder="password"
                className="input input-bordered input-accent w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
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
            {signUpError}
            {/* Login Button */}
            <input
              className="btn btn-outline btn-accent w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
              value="Sign Up"
              type="submit"
            />
          </form>
          <p className="mt-3">
            <small>
              already have an account? <Link className="text-primary hover:underline" to="/signup">Log In</Link>{" "}
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-info shadow-lg hover:shadow-xl ease-in "
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
