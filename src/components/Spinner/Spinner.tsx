import './Spinner.css';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

const Spinner = ({
  size = 'medium',
  color = 'primary',
  className = '',
}: SpinnerProps) => {
  return (
    <div className={`spinner ${size} ${color} ${className}`}>
      <div className="spinner-circle"></div>
    </div>
  );
};

export default Spinner;
