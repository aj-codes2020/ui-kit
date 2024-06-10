import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Badge = ({
  children,
  color = 'default',
  size = 'medium',
  className = '',
}: BadgeProps) => {
  return (
    <span className={`badge ${color} ${size} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
