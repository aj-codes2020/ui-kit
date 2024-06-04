import { useState } from 'react';
import './Select.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
  onChange?: (selected: string | string[]) => void;
  className?: string;
}

const Select = ({
  options,
  isMulti = false,
  placeholder = 'Select...',
  onChange,
  className = '',
}: SelectProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    let newSelected: string[];
    if (isMulti) {
      if (selected.includes(option.value)) {
        newSelected = selected.filter(value => value !== option.value);
      } else {
        newSelected = [...selected, option.value];
      }
    } else {
      newSelected = [option.value];
      setIsOpen(false);
    }
    setSelected(newSelected);
    if (onChange) {
      onChange(isMulti ? newSelected : newSelected[0]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderPlaceholder = () => {
    if (selected.length === 0) {
      return <span className="placeholder">{placeholder}</span>;
    }
    if (isMulti) {
      return selected.map(value => options.find(option => option.value === value)?.label).join(', ');
    }
    return options.find(option => option.value === selected[0])?.label;
  };

  return (
    <div className={`select-container ${className}`}>
      <div className="select-control" onClick={toggleDropdown}>
        {renderPlaceholder()}
        <span className="arrow">&#9662;</span>
      </div>
      {isOpen && (
        <div className="select-menu">
          {options.map(option => (
            <div
              key={option.value}
              className={`select-option ${selected.includes(option.value) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
