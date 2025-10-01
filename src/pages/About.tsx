import React from 'react'
import { Award, Coffee, Heart, Users } from 'lucide-react'
import { SEO } from '@/components/SEO'

export const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'TailwindCSS',
    'GraphQL', 'PostgreSQL', 'Python', 'UI/UX',
    'Figma', 'Git',
  ]

  const awards = [
    { year: '2024', title: 'Best Web Design', organization: 'Awwwards' },
    { year: '2023', title: 'Developer of Year', organization: 'Dev Community' },
    { year: '2023', title: 'Innovation Award', organization: 'Tech Summit' },
  ]

  const stats = [
    { icon: Coffee, value: '500+', label: 'Cups of Coffee', color: 'bg-neon-lime' },
    { icon: Users, value: '50+', label: 'Happy Clients', color: 'bg-neon-pink' },
    { icon: Heart, value: '100+', label: 'Projects Done', color: 'bg-neon-cyan' },
    { icon: Award, value: '15+', label: 'Awards Won', color: 'bg-neon-blue' },
  ]

  return (
    <>
      <SEO
        title="About"
        description="Learn more about Alex Morgan, a creative designer and developer."
        keywords="about, designer, developer, skills, experience"
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-boozt-blue mb-16 leading-none">
            ABOUT ME
          </h1>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="border-4 border-black overflow-hidden aspect-square bg-neon-lime">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Alex Morgan"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-black text-boozt-blue mb-6 uppercase">
                Designer & Developer
              </h2>
              <div className="space-y-4 text-gray-700 text-lg font-medium">
                <p>
                  Hi! I'm Alex Morgan, a passionate designer and developer with over 8 years of
                  experience creating exceptional digital experiences.
                </p>
                <p>
                  I specialize in building modern web applications that combine beautiful design
                  with robust functionality. Bold colors, clean code, and user-first thinking.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies or contributing
                  to open-source projects.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className={`text-center p-8 ${stat.color} text-white border-4 border-black`}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-5xl font-black mb-2">{stat.value}</p>
                  <p className="text-sm font-black uppercase">{stat.label}</p>
                </div>
              )
            })}
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="text-5xl font-black text-boozt-blue mb-8 uppercase">
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-8 py-4 bg-black text-neon-lime font-black text-lg uppercase border-4 border-black hover:bg-neon-lime hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-5xl font-black text-boozt-blue mb-8 uppercase">
              Awards & Recognition
            </h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-8 bg-neon-lime border-4 border-black hover:scale-105 transition-transform"
                >
                  <div className="w-20 h-20 bg-boozt-blue flex items-center justify-center flex-shrink-0 border-4 border-black">
                    <Award className="text-neon-lime" size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase text-boozt-blue mb-1">{award.year}</p>
                    <h3 className="text-3xl font-black mb-1 uppercase">
                      {award.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-700">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
