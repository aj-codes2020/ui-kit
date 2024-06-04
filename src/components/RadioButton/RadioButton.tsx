import './RadioButton.css';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) => {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="radio-custom" />
      {label}
    </label>
  );
};

export default RadioButton;
