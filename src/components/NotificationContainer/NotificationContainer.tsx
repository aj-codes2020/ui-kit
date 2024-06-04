import { useState } from 'react';
import {Notification} from '../../components'; // Ensure the correct path to your Notification component
import './NotificationContainer.css';

interface NotificationItem {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  duration?: number;
}

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (notification: Omit<NotificationItem, 'id'>) => {
    const newNotification = {
      ...notification,
      id: Date.now(),
    };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          type={notification.type}
          message={notification.message}
          duration={notification.duration}
          onClose={removeNotification}
        />
      ))}
      <button
        onClick={() =>
          addNotification({
            type: 'info',
            message: 'This is an informational notification!',
            duration: 3000,
          })
        }
      >
        Add Notification
      </button>
    </div>
  );
};

export default NotificationContainer;
