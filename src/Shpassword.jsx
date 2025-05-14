import React from "react";
import { useState } from "react";

function Shpassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div class="show">
      <h3>PASSWORD:</h3>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <div class="hide">
        <button onClick={toggleVisibility}>
          {" "}
          {showPassword ? (
            <i class="fa-solid fa-eye"></i>
          ) : (
            <i class="fa-solid fa-eye-slash"></i>
          )}{" "}
          Password{" "}
        </button>
      </div>
    </div>
  );
}

export default Shpassword;
// <i class="fa-solid fa-eye"></i>
// <i class="fa-solid fa-eye-slash"></i>
