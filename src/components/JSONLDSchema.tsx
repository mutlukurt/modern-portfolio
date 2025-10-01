import React from 'react'

interface JSONLDSchemaProps {
  type: 'person' | 'creative-work'
  workData?: {
    title: string
    description: string
    image: string
    url: string
  }
}

export const JSONLDSchema: React.FC<JSONLDSchemaProps> = ({ type, workData }) => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alex Morgan',
    jobTitle: 'Creative Designer & Developer',
    url: window.location.origin,
    sameAs: [
      'https://github.com',
      'https://linkedin.com',
      'https://twitter.com',
    ],
    knowsAbout: [
      'Web Development',
      'UI/UX Design',
      'React',
      'TypeScript',
      'TailwindCSS',
    ],
  }

  const creativeWorkSchema = workData ? {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: workData.title,
    description: workData.description,
    image: workData.image,
    url: workData.url,
    creator: {
      '@type': 'Person',
      name: 'Alex Morgan',
    },
  } : null

  const schema = type === 'person' ? personSchema : creativeWorkSchema

  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
