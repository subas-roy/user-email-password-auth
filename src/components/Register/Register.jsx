
const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass)
  }
  return (
    <div className="">
      <div className="mx-auto md:w-1/2 ">
        <h2 className="text-3xl">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input name="email" type="email" placeholder="Email Address" className="mb-4 w-3/4 px-4 py-2 border" />
          <br />
          <input name="password" type="password" placeholder="Password" className="mb-4 w-3/4 px-4 py-2 border" />
          <br />
          <input type="submit" value="Register" className="w-3/4 btn btn-secondary" />
        </form>
      </div>
    </div>
  );
};

export default Register;