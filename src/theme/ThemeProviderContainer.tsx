import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './index';
import Context from '../store/context'

const ThemeProviderContainer = ({ children }: any) => {
  const { globalState } = useContext(Context)

  return (
    <ThemeProvider theme={globalState.isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderContainer