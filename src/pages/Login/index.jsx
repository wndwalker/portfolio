import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import Logo from "@/assets/Logo.png";

import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    if (!password.trim()) {
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      console.log("Login successful:", data);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={Logo} alt="Logo" className="login-image" />
        <form onSubmit={handleSubmit} className="login-form">
          <FormControl fullWidth>
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormControl>
          <Button
            href="/"
            variant="contained"
            type="submit"
            className="login-button"
          >
            Submit
          </Button>
          <Button
            href="/"
            variant="text"
            type="submit"
            className="forgot-button"
          >
            Forgot Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
