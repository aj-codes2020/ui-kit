import { useState } from 'react';
import './DropdownMenu.css';

interface DropdownMenuItem {
  label: string;
  href?: string;
  items?: DropdownMenuItem[];
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  className?: string;
}

const DropdownMenu = ({ items, className = '' }: DropdownMenuProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
  };

  const renderMenuItems = (items: DropdownMenuItem[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`dropdown-menu-item level-${level}`}>
        <div className="dropdown-menu-label" onClick={() => item.items && handleClick(index)}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
          {item.items && (
            <span className="dropdown-menu-arrow">{openIndexes.includes(index) ? '▲' : '▼'}</span>
          )}
        </div>
        {item.items && openIndexes.includes(index) && (
          <div className="dropdown-menu-submenu">{renderMenuItems(item.items, level + 1)}</div>
        )}
      </div>
    ));
  };

  return <div className={`dropdown-menu ${className}`}>{renderMenuItems(items)}</div>;
};

export default DropdownMenu;
