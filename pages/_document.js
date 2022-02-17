import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" />
          <meta
            name="description"
            content="You can find projects Shahid Rahim worked on and contact details on this site."
          ></meta>
          <meta
            property="og:description"
            content="You can find projects Shahid Rahim worked on and contact details on this site."
          />
          <meta
            property="og:title"
            content="Shahid Rahim, Frontend Developer from India"
          />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, Frontend, React, India, Shahid, Rahim"
          ></meta>
        </Head>
        <body>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          ></script> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// // This function needs to be a String
// const themeInitializerScript = `(function() {
// 	${setInitialColorMode.toString()}
// 	setInitialColorMode();
// })()
// `

// function setInitialColorMode() {
//   // Check initial color preference
//   function getInitialColorMode() {
//     const persistedPreferenceMode = window.localStorage.getItem('theme')
//     const hasPersistedPreference = typeof persistedPreferenceMode === 'string'

//     if (hasPersistedPreference) {
//       return persistedPreferenceMode
//     }

//     // Check the current preference
//     const preference = window.matchMedia('(prefers-color-scheme: dark)')
//     const hasMediaQueryPreference = typeof preference.matches === 'boolean'

//     if (hasMediaQueryPreference) {
//       return preference.matches ? 'dark' : 'light'
//     }

//     return 'light'
//   }

//   const currentColorMode = getInitialColorMode()
//   const element = document.documentElement
//   element.style.setProperty('--initial-color-mode', currentColorMode)

//   // If darkmode apply darkmode
//   if (currentColorMode === 'dark')
//     document.documentElement.setAttribute('data-theme', 'dark')
// }

export default MyDocument
