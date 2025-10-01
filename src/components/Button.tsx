import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-neon-lime text-boozt-blue hover:bg-neon-yellow',
    secondary: 'bg-boozt-blue text-neon-lime hover:bg-boozt-purple',
    outline: 'border-4 border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-boozt-blue',
  }

  return (
    <button
      className={`px-8 py-4 font-black uppercase transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
