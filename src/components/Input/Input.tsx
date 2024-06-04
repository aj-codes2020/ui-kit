import { ChangeEvent } from 'react';
import './Input.css';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'number';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
}

const Input = ({
  type,
  value,
  onChange,
  placeholder = '',
  className = '',
  min,
  max,
  step,
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`input ${className}`}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default Input;
