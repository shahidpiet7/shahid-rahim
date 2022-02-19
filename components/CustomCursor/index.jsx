import React, { useEffect } from 'react'
import gsap from 'gsap'

/**
 * Custom Cursor using GSAP3
 */
const CustomCursor = () => {
  useEffect(() => {
    let cursor
    if (window !== undefined) {
      cursor = document.querySelector('.cursor')
      document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
          duration: 0.8,
          x: e.pageX - 5,
          y: e.pageY - 5,
          ease: 'power3.out',
        })
      })

      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => {
          gsap.to(cursor, {
            duration: 0.3,
            scale: 5,
            zIndex: -1,
            opacity: 0.5,
          })
        })
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, {
            duration: 0.3,
            scale: 1,
            zIndex: 1,
            opacity: 1,
          })
        })
      })
    }
  }, [])
  return <div className="cursor"></div>
}

export default CustomCursor
