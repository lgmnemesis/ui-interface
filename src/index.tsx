import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import GlobalStateProvider from './store/GlobalStateProvider';
import ThemeProviderContainer from './theme/ThemeProviderContainer';
import { GlobalStyles } from './theme/globalStyles'
import { HashRouter } from 'react-router-dom'
import App from './pages/App'

ReactDOM.render(
  <StrictMode>
    <GlobalStateProvider>
      <ThemeProviderContainer>
        <GlobalStyles />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProviderContainer>
    </GlobalStateProvider>
  </StrictMode>,
  document.getElementById('root')
)
