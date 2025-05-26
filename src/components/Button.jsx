/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      base: 'bg-petmeOrange text-white hover:bg-petmeGold',
      hover: 'bg-petmeGold'
    },
    secondary: {
      base: 'border-2 border-petmeOrange text-petmeOrange hover:border-petmeGold hover:text-petmeGold',
      hover: 'border-petmeGold text-petmeGold'
    },
    white: {
      base: 'bg-white text-petmeOrange hover:bg-petmeGold hover:text-white',
      hover: 'bg-petmeGold text-white'
    }
  };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <a
      href={href}
      className={`${currentVariant.base} ${className} px-6 py-3 rounded-md text-lg font-medium transition-all duration-200 text-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </a>
  );
}
