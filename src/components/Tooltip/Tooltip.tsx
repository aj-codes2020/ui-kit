import React, { useState } from 'react';
import './Tooltip.css';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const Tooltip = ({
  content,
  children,
  position = 'top',
  className = '',
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className={`tooltip-container ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0} // to make it focusable
    >
      {children}
      {isVisible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
