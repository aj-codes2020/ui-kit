import React from 'react';
import './Slider.css';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const Slider = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  className = '',
}: SliderProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className={`slider-container ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};

export default Slider;
