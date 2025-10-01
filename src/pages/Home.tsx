import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Code, Palette, Smartphone, Zap } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { SEO } from '@/components/SEO'
import { projects } from '@/data/projects'

const JSONLDSchema = lazy(() => import('@/components/JSONLDSchema').then(m => ({ default: m.JSONLDSchema })))

export const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3)

  const services = [
    {
      icon: Code,
      title: 'Web Dev',
      description: 'Building responsive, performant web applications',
      color: 'bg-neon-blue',
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Creating cross-platform experiences',
      color: 'bg-neon-lime',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Designing intuitive interfaces',
      color: 'bg-neon-pink',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed',
      color: 'bg-neon-cyan',
    },
  ]

  return (
    <>
      <SEO
        title="Home"
        description="Creative designer and developer crafting modern web experiences with cutting-edge technologies."
        keywords="web development, design, portfolio, React, TypeScript"
      />

      <Suspense fallback={null}>
        <JSONLDSchema type="person" />
      </Suspense>

      {/* Hero Section - Bold Blue Background */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-boozt-blue relative">
        <div className="container mx-auto">
          <div>
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-neon-lime text-boozt-blue text-sm font-black">
                PORTFOLIO 2025
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-8 leading-none break-words">
              BOOST<br />NOW
            </h1>

            <p className="text-xl sm:text-3xl text-neon-lime font-bold mb-4 uppercase break-words">
              Creative Designer & Developer
            </p>

            <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl font-medium">
              Crafting exceptional digital experiences with bold design and modern technology
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/work">
                <button className="px-8 py-4 bg-neon-lime text-boozt-blue font-black text-lg uppercase hover:bg-neon-yellow transition-colors active:scale-95">
                  View Projects
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border-4 border-neon-lime text-neon-lime font-black text-lg uppercase hover:bg-neon-lime hover:text-boozt-blue transition-colors active:scale-95">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Lime Background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neon-lime" aria-labelledby="featured-projects">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
            <div>
              <h2 id="featured-projects" className="text-4xl sm:text-6xl lg:text-7xl font-black text-boozt-blue mb-4 leading-none break-words">
                FEATURED<br />WORK
              </h2>
            </div>
            <Link to="/work" className="shrink-0">
              <button className="px-6 py-3 bg-boozt-blue text-neon-lime font-black uppercase hover:bg-boozt-purple transition-colors text-sm whitespace-nowrap">
                View All →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Grid Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="services">
        <div className="container mx-auto">
          <h2 id="services" className="text-4xl sm:text-6xl lg:text-7xl font-black text-boozt-blue mb-16 leading-none break-words">
            WHAT I DO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`p-6 sm:p-8 ${service.color} text-white relative overflow-hidden border-4 border-black`}
                >
                  <div className="absolute top-4 right-4">
                    <Icon className="w-12 h-12 sm:w-16 sm:h-16 opacity-20" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-4xl font-black mb-4 uppercase break-words">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Blue Background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-boozt-blue">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-black text-neon-lime mb-2">+800</div>
              <div className="text-white uppercase font-bold">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-neon-pink mb-2">+10k</div>
              <div className="text-white uppercase font-bold">Users</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-neon-cyan mb-2">+50</div>
              <div className="text-white uppercase font-bold">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-neon-yellow mb-2">100%</div>
              <div className="text-white uppercase font-bold">Quality</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
