import { ThemeProvider } from "@mui/material/styles"
import rootTheme from "@/themes/rootTheme"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={rootTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
