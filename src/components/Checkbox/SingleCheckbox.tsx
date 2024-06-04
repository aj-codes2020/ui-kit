import './Checkbox.css';

interface SingleCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const SingleCheckbox = ({ label, checked, onChange, className = '' }: SingleCheckboxProps) => {
  return (
    <label className={`checkbox-container ${className}`}>
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default SingleCheckbox;
