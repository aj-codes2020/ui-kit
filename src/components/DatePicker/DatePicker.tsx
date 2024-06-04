import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import ReactDatePicker from 'react-datepicker';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  showTimeSelect?: boolean;
  dateFormat?: string;
  className?: string;
}

const DatePicker = ({
  selected,
  onChange,
  showTimeSelect = false,
  dateFormat = 'MM/dd/yyyy',
  className = '',
}: DatePickerProps) => {
  return (
    <div className={`date-picker-container ${className}`}>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        dateFormat={dateFormat}
        className="date-picker-input"
      />
    </div>
  );
};

export default DatePicker;
