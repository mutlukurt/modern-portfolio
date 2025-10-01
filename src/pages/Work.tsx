import React, { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { SEO } from '@/components/SEO'
import { projects } from '@/data/projects'

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <>
      <SEO
        title="Work"
        description="Browse through my portfolio of web development, design, and mobile app projects."
        keywords="portfolio, projects, web development, design, case studies"
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
        <div className="container mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-boozt-blue mb-6 leading-none">
              MY WORK
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl">
              A collection of projects showcasing bold design and modern development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-black uppercase text-sm border-4 border-black transition-all ${
                  selectedCategory === category
                    ? 'bg-boozt-blue text-neon-lime'
                    : 'bg-white text-black hover:bg-neon-lime'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-bold">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
