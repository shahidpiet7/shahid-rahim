import { ThemeProvider } from 'next-themes'
import 'remixicon/fonts/remixicon.css'
import CustomCursor from '../components/CustomCursor'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CustomCursor />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
