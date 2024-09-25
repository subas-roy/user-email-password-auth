import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
    // reset error
    setRegisterError('')
    setSuccess('')
    
    // add validation
    
    // sign in
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      result.user
      setSuccess('User logged in successfully.')
    })
    .catch(error => {
      console.error(error)
      setRegisterError(error.message);
    })
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
              {/* <button type="submit" onClick={handleLogin} className="btn btn-primary">Login</button> */}
            </div>
            {registerError && <p className="text-red-700 mt-2">{registerError}</p>}
            {success && <p className="text-green-700 mt-4">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;