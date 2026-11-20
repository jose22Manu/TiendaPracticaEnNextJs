import React from 'react';

interface CartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const CartIcon: React.FC<CartIconProps> = ({
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
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ruedas del carrito */}
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      {/* Base y cuerpo del carrito */}
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
};