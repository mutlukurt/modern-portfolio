import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`bg-white border-4 border-black overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
