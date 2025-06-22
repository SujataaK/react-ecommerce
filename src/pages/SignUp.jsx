import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("✅ Registered successfully!");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {error && <div className="alert alert-danger">{error}</div>}

          <form className="p-4 shadow rounded bg-light" onSubmit={handleSignUp}>
            <div className="mb-3">
              <label>Name</label>
              <input type="text" className="form-control" name="name" onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" name="email" onChange={handleChange} />
            </div>

            <div className="mb-3 position-relative">
              <label>Password</label>
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                name="password"
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="position-absolute top-50 end-0 translate-middle-y px-3"
                style={{ cursor: "pointer" }}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="mb-3 position-relative">
              <label>Confirm Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                onChange={handleChange}
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="position-absolute top-50 end-0 translate-middle-y px-3"
                style={{ cursor: "pointer" }}
              >
                {showConfirm ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button className="btn btn-success w-100">Sign Up</button>

            <div className="mt-3 text-center">
              Already have an account? <Link to="/signin">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
