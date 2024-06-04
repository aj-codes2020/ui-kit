import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  type?: 'status' | 'counter';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Badge = ({
  children,
  type = 'status',
  color = 'default',
  size = 'medium',
  className = '',
}: BadgeProps) => {
  return (
    <span className={`badge ${type} ${color} ${size} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
