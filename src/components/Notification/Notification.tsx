import { useEffect } from 'react';
import './Notification.css';

interface NotificationProps {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  duration?: number; // Duration in milliseconds
  onClose: (id: number) => void;
}

const Notification = ({
  id,
  type,
  message,
  duration = 3000,
  onClose,
}: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div className={`notification notification-${type}`}>
      {message}
      <button className="notification-close" onClick={() => onClose(id)}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
