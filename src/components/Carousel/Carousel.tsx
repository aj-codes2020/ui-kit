import { useState, useEffect, ReactNode } from 'react';
import './Carousel.css';

interface CarouselProps {
  items: ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showNavigation?: boolean;
  navigationType?: 'dots' | 'pictures';
  navigationPosition?: 'bottom' | 'below';
  className?: string;
}

const Carousel = ({
  items = [],
  autoplay = false,
  autoplayInterval = 3000,
  showNavigation = true,
  navigationType = 'dots',
  navigationPosition = 'below',
  className = '',
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;

    let interval: NodeJS.Timeout | null = null;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, autoplayInterval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, autoplayInterval, items.length]);

  const handleNavigationClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) {
    return <div className={`carousel ${className}`}>No items to display</div>;
  }

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      {showNavigation && (
        <div
          className={`carousel-navigation ${navigationPosition === 'bottom' ? 'bottom' : 'below'}`}
        >
          {navigationType === 'dots' ? (
            <div className="carousel-dots">
              {items.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleNavigationClick(index)}
                />
              ))}
            </div>
          ) : (
            <div className="carousel-pictures">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`picture-thumbnail ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleNavigationClick(index)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
