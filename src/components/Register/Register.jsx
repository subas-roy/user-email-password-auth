import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted)

    // reset error
    setRegisterError('')
    setSuccess('')
    
    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters.')
      return; // ends the program
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should have an uppercase character.')
      return;
    }
    else if (!accepted) {
      setRegisterError('Please accpted our Terms and Conditions.')
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
        setSuccess('User created successfully.')
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message)
      })
  }
  return (
    <div className="">
      <div className="mx-auto md:w-1/2 ">
        <h2 className="text-3xl">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input name="email" type="email" required placeholder="Email Address" className="mb-4 w-full px-4 py-2 border" />
          <br />
          <div className="relative">
            <input name="password" 
            type={showPassword ? "text" : "password"} 
            required placeholder="Password" className="mb-4 w-full border px-4 py-2" />
            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <FaEyeSlash/> : <FaEye/>
              }
            </span>
          </div>
          <div className="mb-3">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terns">Accept our <a href="#">Terms and Conditions</a></label>
          </div>
          <input type="submit" value="Register" className="w-full btn btn-secondary" />
        </form>
        {registerError && <p className="text-red-700 mt-2">{registerError}</p>}
        {success && <p className="text-green-700 mt-4">{success}</p>}
        <p>Already have an account? Please <Link to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;