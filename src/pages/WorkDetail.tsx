import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { projects } from '@/data/projects'

export const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-neon-lime">
        <div className="text-center">
          <h1 className="text-4xl font-black text-boozt-blue mb-6">PROJECT NOT FOUND</h1>
          <Link to="/work">
            <button className="px-8 py-4 bg-boozt-blue text-neon-lime font-black uppercase">
              Back to Work
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.category}, ${project.tools.join(', ')}`}
        ogImage={project.image}
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <Link
            to="/work"
            className="inline-flex items-center font-black uppercase mb-12 hover:text-boozt-blue transition-colors"
          >
            <ArrowLeft size={24} className="mr-2" />
            Back to Work
          </Link>

          <div>
            {/* Project Header */}
            <div className="mb-16">
              <div className="mb-8">
                <span className="inline-block px-6 py-2 bg-neon-lime text-boozt-blue font-black text-sm uppercase mb-6">
                  {project.category}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-boozt-blue mb-6 leading-none">
                {project.title}
              </h1>

              <p className="text-2xl text-gray-600 font-medium mb-8">{project.description}</p>

              <div className="flex gap-4 mb-12">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="px-8 py-4 bg-boozt-blue text-neon-lime font-black uppercase flex items-center hover:bg-boozt-purple transition-colors">
                      <ExternalLink size={20} className="mr-2" />
                      Visit Site
                    </button>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="px-8 py-4 border-4 border-black text-black font-black uppercase flex items-center hover:bg-black hover:text-neon-lime transition-colors">
                      <Github size={20} className="mr-2" />
                      GitHub
                    </button>
                  </a>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-neon-lime border-4 border-black">
                <div>
                  <p className="text-sm font-black uppercase mb-2 text-boozt-blue">Year</p>
                  <p className="font-black text-2xl">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm font-black uppercase mb-2 text-boozt-blue">Category</p>
                  <p className="font-black text-2xl">{project.category}</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-sm font-black uppercase mb-2 text-boozt-blue">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs font-black px-3 py-1 bg-boozt-blue text-neon-lime uppercase"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            {project.images.length > 0 && (
              <div className="mb-16">
                <div className="relative aspect-video bg-gray-100 border-4 border-black overflow-hidden mb-6">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-neon-lime text-boozt-blue flex items-center justify-center font-black hover:bg-neon-yellow transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-neon-lime text-boozt-blue flex items-center justify-center font-black hover:bg-neon-yellow transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
                {project.images.length > 1 && (
                  <div className="flex gap-3 justify-center">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-4 h-4 border-2 border-black transition-colors ${
                          index === currentImageIndex ? 'bg-boozt-blue' : 'bg-white'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Project Description */}
            <div className="bg-boozt-blue text-white p-12 border-4 border-black">
              <h2 className="text-4xl font-black mb-6 text-neon-lime uppercase">
                About This Project
              </h2>
              <p className="text-lg leading-relaxed font-medium">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
