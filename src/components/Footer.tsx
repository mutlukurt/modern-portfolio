import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ]

  return (
    <footer className="bg-black text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-5xl font-black mb-4 text-neon-lime">
              LET'S WORK<br />TOGETHER
            </h3>
            <p className="text-white/60 text-lg">
              Available for freelance projects and collaborations
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex gap-4 mb-6">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-neon-lime text-boozt-blue flex items-center justify-center hover:bg-neon-pink hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2025 Mutlu Kurt. Licensed under MIT License.
          </p>
          <p className="text-neon-lime font-black">
            DESIGNED & DEVELOPED WITH 💚
          </p>
        </div>
      </div>
    </footer>
  )
}
