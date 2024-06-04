import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

const Accordion = ({ items, className = '' }: AccordionProps) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [maxHeights, setMaxHeights] = useState<number[]>([]);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map(ref => (ref ? ref.scrollHeight : 0));
    setMaxHeights(heights);
  }, []);

  const handleToggle = (index: number) => {
    setActiveIndexes(prevActiveIndexes =>
      prevActiveIndexes.includes(index)
        ? prevActiveIndexes.filter(i => i !== index)
        : [...prevActiveIndexes, index]
    );
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndexes.includes(index) ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">{activeIndexes.includes(index) ? '−' : '+'}</span>
          </div>
          <div
            className={`accordion-content ${activeIndexes.includes(index) ? 'active' : ''}`}
            ref={el => (contentRefs.current[index] = el)}
            style={{ maxHeight: activeIndexes.includes(index) ? `${maxHeights[index]}px` : '0px' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
