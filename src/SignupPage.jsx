import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="name" className="form-label">Full Name: </label>
          <input type="text" className="form-control" id="name" name="name" placeholder="John Smith" maxLength="20" onChange={(event) => setName(event.target.value)} />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="email" className="form-control" id="email" name="email" placeholder="john@example.com" />
        </div>
        <div className="col-6">
          <label htmlFor="password" className="form-label">Password: </label>
          <input type="password" className="form-control" id="password" name="password" />
          <small>Must be 8 Characters minimum and contain 1 Capital, 1 Lowercase, and 1 Special Character</small>
        </div>
        <div className="col-6">
          <label htmlFor="password" className="form-label">Confirm Password: </label>
          <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  );
}

