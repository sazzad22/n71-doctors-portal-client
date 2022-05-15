import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (gUser ) {
    console.log(user);
  }
  if (loading || gLoading) {
    return <div className="h-screen flex justify-center items-center"><button class="btn loading ">loading</button></div>
  }


  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  };

  return (
    <div className="flex items-center min-h-screen justify-center pt-20">
      <div class="card w-96 bg-base-100 shadow-2xl ">
        <div class="card-body">
          <h2 class="text-center font-bold text-2xl text-accent ">Login</h2>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              {/* Email input */}
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input  input-bordered input-accent  w-full max-w-xs"
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
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
              </label>
            </div>
            {/* password */}
            <div class="form-control w-full max-w-xs mb-6">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered input-accent w-full max-w-xs"
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
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
                  {/* Login Button */}
              <input
                className="btn btn-outline btn-accent w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
                value="Login"
                type="submit"
              />
            
          </form>
          <p className="mt-3">
            <small>
              New to Doctors Portal? <Link to="/signup">Sign Up</Link>{" "}
            </small>
          </p>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-info shadow-lg hover:shadow-xl ease-in "
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
