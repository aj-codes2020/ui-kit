import './ProgressBar.css';

interface ProgressBarProps {
  value: number;
  max: number;
  type?: 'linear' | 'circular';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ProgressBar = ({
  value,
  max,
  type = 'linear',
  color = 'primary',
  size = 'medium',
  className = '',
}: ProgressBarProps) => {
  const percentage = (value / max) * 100;

  if (type === 'circular') {
    const strokeWidth = size === 'small' ? 4 : size === 'large' ? 8 : 6;
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg
        className={`progress-circle ${color} ${size} ${className}`}
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          className="progress-circle-bg"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="progress-circle-fg"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    );
  }

  return (
    <div className={`progress-bar ${color} ${size} ${className}`}>
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
