import React, { useState } from 'react';
import '../styles.css';

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [colors, setColors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = (e) => {
    e.preventDefault();
    let tempErrors = {};
    let tempColors = {};
    let valid = true;

    if (username.trim().length >= 8) {
      tempColors.username = "green";
    } else {
      tempErrors.username = "Username must be at least 8 characters.";
      tempColors.username = "red";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.trim())) {
      tempColors.email = "green";
    } else {
      tempErrors.email = "Please enter a valid email address.";
      tempColors.email = "red";
      valid = false;
    }

    if (password.length >= 8) {
      tempColors.password = "green";
    } else {
      tempErrors.password = "Password must be at least 8 characters.";
      tempColors.password = "red";
      valid = false;
    }

    if (password === confirmPassword && password !== "") {
      tempColors.confirmPassword = "green";
    } else {
      tempErrors.confirmPassword = "Passwords do not match.";
      tempColors.confirmPassword = "red";
      valid = false;
    }

    setErrors(tempErrors);
    setColors(tempColors);

    if (valid) {
      const userData = { username, email, password, confirmPassword };
      localStorage.setItem("userData", JSON.stringify(userData));

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      
      setSuccessMsg("Form submitted successfully ✅");
    } else {
      setSuccessMsg("");
    }
  };

  return (
    <div className="card">
      <div className="card-image"></div>
      <form onSubmit={validate}>
        <input
          type="text"
          placeholder="Name"
          style={{ borderColor: colors.username }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="error">{errors.username}</p>

        <input
          type="text"
          placeholder="Email"
          style={{ borderColor: colors.email }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          placeholder="Password"
          style={{ borderColor: colors.password }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errors.password}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          style={{ borderColor: colors.confirmPassword }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errors.confirmPassword}</p>

        <button className="submit-btn" type="submit">Submit</button>
        {successMsg && <p className="success">{successMsg}</p>}
      </form>
    </div>
  );
};

export default Form;
