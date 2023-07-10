import { ThemeProvider } from './context/ThemeContext'
import './globals.scss'

export const metadata = {
  title: 'Countries API Information',
  description: 'Countries rendered from Countries API',
}

export default function RootLayout({ children }) {
  
  return (
    <ThemeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  )
}
