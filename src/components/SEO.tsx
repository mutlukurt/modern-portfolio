import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl
}) => {
  useEffect(() => {
    document.title = `${title} | Modern Portfolio`

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords || 'portfolio, design, web development' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ]

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property'
      const value = name || property
      let element = document.querySelector(`meta[${attribute}="${value}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, value!)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    })

    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonicalUrl)
    }
  }, [title, description, keywords, ogImage, canonicalUrl])

  return null
}
