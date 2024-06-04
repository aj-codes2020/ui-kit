import SingleCheckbox from './SingleCheckbox'; // Ensure the correct path to your SingleCheckbox component
import './Checkbox.css';

interface Option {
  label: string;
  value: string;
}

interface GroupCheckboxProps {
  options: Option[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  className?: string;
}

const GroupCheckbox = ({ options, selectedValues, onChange, className = '' }: GroupCheckboxProps) => {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newSelectedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((v) => v !== value);
    onChange(newSelectedValues);
  };

  return (
    <div className={`checkbox-group ${className}`}>
      {options.map((option) => (
        <SingleCheckbox
          key={option.value}
          label={option.label}
          checked={selectedValues.includes(option.value)}
          onChange={(checked) => handleCheckboxChange(option.value, checked)}
        />
      ))}
    </div>
  );
};

export default GroupCheckbox;
