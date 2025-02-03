import React from 'react';

interface SvgIconProps {
  className?: string;
  strokeWidth?: string | number;
}

const CustomIcon: React.FC<SvgIconProps> = ({ className = "h-6 w-6", strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={strokeWidth}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

export default CustomIcon;
