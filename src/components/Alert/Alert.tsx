import './Alert.css';

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  className?: string;
}

const Alert = ({ type, message, className = '' }: AlertProps) => {
  return (
    <div className={`alert alert-${type} ${className}`}>
      {message}
    </div>
  );
};

export default Alert;
