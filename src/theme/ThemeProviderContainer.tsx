import { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './index';
import { StoreContext } from '../store/context'
import { IS_DARK_MODE } from '../constants'

const ThemeProviderContainer = ({ children }: any) => {
  const { globalState, globalDispatch } = useContext(StoreContext)
  const [darkModeIndicator, setDarkModeIndicator] = useState(false)

  useEffect(() => {
    try {
      const isBrowserDarkMode = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
      const storage = window.localStorage.getItem(IS_DARK_MODE)
      const indicator = storage === null && isBrowserDarkMode ? 'true' : storage
      globalDispatch({type: indicator === 'true' ? 'ENABLE_DARK_MODE' : 'DISABLE_DARK_MODE'})
    } catch (error) {
      console.error(error)
    }
    setDarkModeIndicator(true)
  }, [globalDispatch])

  if (!darkModeIndicator) return <div></div>

  return (
    <ThemeProvider theme={globalState.isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderContainer