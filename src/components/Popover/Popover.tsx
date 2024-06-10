import React, { useState } from 'react';
import './Popover.css';

interface PopoverProps {
 content: React.ReactNode;
 children: React.ReactNode;
 position?: 'top' | 'bottom' | 'left' | 'right';
 className?: string;
}

const Popover = ({
 content,
 children,
 position = 'bottom',
 className = '',
}: PopoverProps) => {
 const [isVisible, setIsVisible] = useState(false);

 const togglePopover = () => setIsVisible(!isVisible);

 return (
   <div className={`popover-container ${className}`} onClick={togglePopover}>
     {children}
     {isVisible && (
       <div className={`popover-box popover-${position}`} onClick={(e) => e.stopPropagation()}>
         {content}
       </div>
     )}
   </div>
 );
};

export default Popover;
