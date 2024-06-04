import { useState } from 'react';
import './Rating.css';

interface RatingProps {
  maxRating?: number;
  value?: number;
  onChange?: (rating: number) => void;
  className?: string;
  readOnly?: boolean;
}

const Rating = ({
  maxRating = 5,
  value = 0,
  onChange,
  className = '',
  readOnly = false,
}: RatingProps) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (!readOnly && onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (!readOnly) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(null);
    }
  };

  return (
    <div className={`rating ${className}`}>
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`star ${starValue <= (hoverRating ?? value) ? 'filled' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
