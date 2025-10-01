import { useState, useEffect } from 'react'

export const useLiteMode = () => {
  const [liteMode, setLiteMode] = useState(() => {
    const saved = localStorage.getItem('liteMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('liteMode', JSON.stringify(liteMode))
  }, [liteMode])

  const toggleLiteMode = () => setLiteMode((prev: boolean) => !prev)

  return { liteMode, toggleLiteMode }
}
