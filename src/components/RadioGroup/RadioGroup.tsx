import { useState } from 'react';
import { RadioButton } from '../../components'; 
import './RadioGroup.css';

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  onChange: (value: string) => void;
}

const RadioGroup = ({ name, options, onChange }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="radio-group">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={selectedValue === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
