import './Grid.css';
import React, { ReactNode } from 'react';

interface GridProps {
  columns?: number;  // columns prop is now optional since we use CSS classes for columns
  gap?: string;
  className?: string;
  children: ReactNode;
}

const Grid = ({
  gap = '1rem',
  className = '',
  children,
  ...props
}: GridProps) => {
  return (
    <div
      className={`grid-container ${className}`}
      style={{ '--grid-gap': gap } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
