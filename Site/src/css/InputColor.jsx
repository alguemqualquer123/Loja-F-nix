import React, { useState } from "react";
import { DivInputColor } from "../css/InputColor";

export const InputColor = () => {
  const [color, setColor] = useState("");
  const [showColorInput, setShowColorInput] = useState(true);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDivClick = () => {
    setShowColorInput(!showColorInput);
  };

  return (
    <DivInputColor>
      {/* <div style={{ background: color}} onClick={handleDivClick}>
        {showColorInput && ( */}
          <input type="color" value={color} onChange={handleColorChange} />
        {/* )}
      </div> */}
    </DivInputColor>
  );
};
