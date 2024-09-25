import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    // reset error
    setRegisterError('')
    setSuccess('')
    
    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters')
      return; // ends the program
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your password should have an uppercase character!')
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
        setSuccess('User created successfully!')
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
          <input name="email" type="email" required placeholder="Email Address" className="mb-4 w-3/4 px-4 py-2 border" />
          <br />
          <input name="password" 
          type={showPassword ? "text" : "password"} 
          required placeholder="Password" className="mb-4 w-3/4 px-4 py-2 border" />
          <span onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash/> : <FaEye/>
            }
          </span>
          <br />
          <input type="submit" value="Register" className="w-3/4 btn btn-secondary" />
        </form>
        {registerError && <p className="text-red-700 mt-2">{registerError}</p>}
        {success && <p className="text-green-700 mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default Register;