import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  id: string
  title: string
  category: string
  image: string
  description: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  image,
  description,
}) => {
  const colors = ['bg-neon-blue', 'bg-neon-pink', 'bg-neon-cyan', 'bg-neon-lime']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <Link to={`/work/${id}`}>
      <div className="group bg-white border-4 border-black hover:scale-105 transition-transform h-full">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 ${randomColor} mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-black uppercase tracking-wider mb-2 text-boozt-blue">
                {category}
              </p>
              <h3 className="text-2xl font-black uppercase leading-tight">{title}</h3>
            </div>
            <ArrowUpRight
              size={24}
              className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  )
}
