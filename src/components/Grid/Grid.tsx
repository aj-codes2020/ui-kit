import './Grid.css';
import { ReactNode } from 'react';

interface GridProps {
 className?: string;
 children: ReactNode;
}

const Grid = ({
 className = '',
 children,
 ...props
}: GridProps) => {
 return (
   <div
     className={`grid ${className}`}
     {...props}
   >
     {children}
   </div>
 );
};

export default Grid;
