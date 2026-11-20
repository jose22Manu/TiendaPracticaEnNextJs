import React from 'react';

interface UserIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const UserIcon: React.FC<UserIconProps> = ({
  size = 24,
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="#111827" // Color oscuro para las líneas
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Cabeza */}
      <circle cx="12" cy="8" r="4" />
      {/* Hombros / torso */}
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
};