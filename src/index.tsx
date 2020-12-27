import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import GlobalStateProvider from './store/GlobalStateProvider';
import ThemeProviderContainer from './theme/ThemeProviderContainer';
import { GlobalStyles } from './theme/globalStyles';
import App from './pages/App'

ReactDOM.render(
  <StrictMode>
    <GlobalStateProvider>
      <ThemeProviderContainer>
        <GlobalStyles />
        <App />
      </ThemeProviderContainer>
    </GlobalStateProvider>
  </StrictMode>,
  document.getElementById('root')
)
