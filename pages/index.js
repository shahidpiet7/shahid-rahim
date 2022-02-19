import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { FaRegMoon, FaSun } from 'react-icons/fa'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  /**
   * After mounting, we have access to the theme
   */
  useEffect(() => setMounted(true), [])

  // useEffect(() => {
  //   if(theme === 'dark'){
  //     setTheme('light')
  //   } else {
  //     setTheme('dark')
  //   }
  // }, [mounted, setMounted])

  const hndleDarkMode = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shahid Rahim</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        {mounted && (
          <button onClick={hndleDarkMode} className={styles.darkMode}>
            {theme === 'dark' ? (
              <span className={styles.darkMode_sun}>
                <FaSun />
              </span>
            ) : (
              <span className={styles.darkMode_moon}>
                <FaRegMoon />
              </span>
            )}{' '}
          </button>
        )}
        <h1 className={styles.title}>Shahid Rahim</h1>
        <h2>Front end engineer</h2>

        <p className={styles.description}>
          Check out. <code className="backStrip">what I can do</code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Website Development &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Webapp development &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Wordpress Blogs Development &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>SEO Services &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by: <span> shahid-rahim</span>
        </a>
      </footer>
    </div>
  )
}
