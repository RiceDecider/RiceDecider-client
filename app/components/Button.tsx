'use client';

import { MouseEvent } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  classNames?: string;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  classNames,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative h-14 w-full select-none rounded-lg border-2 text-lg font-medium transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70
  ${
    outline
      ? 'border-[1px] border-rose-500 bg-white text-rose-500'
      : 'border-rose-500 bg-rose-500 text-white'
  }   
  ${classNames && classNames}
  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3 " />}
      {label}
    </button>
  );
};

export default Button;
