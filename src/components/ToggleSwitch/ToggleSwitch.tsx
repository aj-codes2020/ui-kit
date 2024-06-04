import { useState } from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  onToggle?: (isOn: boolean) => void;
  initialState?: boolean;
  className?: string;
}

const ToggleSwitch = ({
  onToggle,
  initialState = false,
  className = '',
}: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className={`toggle-switch ${className} ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="toggle-thumb" />
    </div>
  );
};

export default ToggleSwitch;
