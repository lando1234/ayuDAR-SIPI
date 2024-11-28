import React, { useState } from "react";

export interface SliderProps {
    onToggle: (value: boolean) => void;
  }

const ToggleSlider = (props: SliderProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    props.onToggle(!isOn);
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center bg-gray-100">
      <label
        className="flex items-center cursor-pointer"
        onClick={toggleSwitch}
      >
        {/* Switch Background */}
        <div className="relative">
          <div
            className={`w-14 h-8 ${
              isOn ? "bg-primary" : "bg-gray-300"
            } rounded-full shadow-inner transition duration-300`}
          ></div>
          {/* Slider */}
          <div
            className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow transform transition duration-300 ${
              isOn ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        {/* Label */}
        <span className="ml-3 text-gray-700 text-sm font-medium">
          {isOn ? "Mostrar todos los pedidos": "Mostrar solo pedidos pendientes de ayuda"}
        </span>
      </label>
    </div>
  );
};

export default ToggleSlider;