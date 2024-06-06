import './Grid.css';
import React, { ReactNode } from 'react';

interface GridProps {
  gap?: string;
  className?: string;
  children: ReactNode;
}

const Grid = ({
  gap = '0rem', 
  className = '',
  children,
  ...props
}: GridProps) => {
  return (
    <div
      className={`grid ${className}`}
      style={{ '--grid-gap': gap } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
