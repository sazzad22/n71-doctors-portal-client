import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  
  return <div className="flex items-center min-h-screen justify-center">
    <div class="card w-96 bg-base-100 shadow-xl ">
  <div class="card-body">
    <h2 class="text-center font-bold ">Login</h2>
    <p></p>
    <div class="card-actions justify-center">
          <button class="btn btn-primary">Log In</button>
          

        </div>
        <div class="divider">OR</div>
        <button onClick={()=>signInWithGoogle()} class="btn btn-outline btn-info text-white ">Google Sign In</button>
      </div>
      

</div>
  </div>;
};

export default Login;
