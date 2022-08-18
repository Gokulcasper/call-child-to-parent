import React, { useState } from "react";

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
      className="boxInput"
      placeholder="Enter Your Color"
    />
  );
};

export default Callback;
