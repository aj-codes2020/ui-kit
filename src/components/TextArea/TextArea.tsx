import { ChangeEvent } from 'react';
import './TextArea.css';

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
  className?: string;
}

const Textarea = ({
  value,
  onChange,
  placeholder = '',
  rows = 4,
  cols = 50,
  className = '',
}: TextareaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      className={`textarea ${className}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    />
  );
};

export default Textarea;
