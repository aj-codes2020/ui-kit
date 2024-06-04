import './Avatar.css';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  className?: string;
}

const Avatar = ({
  src,
  alt,
  size = 'medium',
  shape = 'circle',
  className = '',
}: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar ${size} ${shape} ${className}`}
    />
  );
};

export default Avatar;
