import React, { useState } from "react";
import "./BackgroundChanger.modal.css";

const BackgroundChanger = () => {
  const [color, setColor] = useState("#ffffff");

  const handleChangeColor = (e) => {
    setColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  return (
    <div className="background-changer">
      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
        className="color-picker"
      />
    </div>
  );
};

export default BackgroundChanger;
