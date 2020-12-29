import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import {StoreContext} from '../../store/context'
import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo_dark.png'
import {
  HeaderFrame, 
  HeaderRow, 
  Title, 
  AppIcon, 
  HeaderLinks, 
  StyledNavLink,
  HeaderControls,
  HeaderElement,
  HeaderElementWrap
} from './styles'

export const Header = () => {
  const { t } = useTranslation()
  const { globalState } = useContext(StoreContext)
  const isDarkMode = globalState.isDarkMode
  console.log('moshe isDarkMode:', isDarkMode)

    return (
      <HeaderFrame>
        <HeaderRow>
          <Title href=".">
            <AppIcon>
              <img width={'24px'} src={isDarkMode ? LogoDark : Logo} alt="logo" />
            </AppIcon>
          </Title>
          <HeaderLinks>
            <StyledNavLink id={`home-nav-link`} to={'/home'}>
              {t('home')}
            </StyledNavLink>
            <StyledNavLink id={`explore-nav-link`} to={'/explore'}>
              {t('explore')}
            </StyledNavLink>
          </HeaderLinks>
        </HeaderRow>
        <HeaderControls>
          <HeaderElement>

          </HeaderElement>
          <HeaderElementWrap>
            
          </HeaderElementWrap>
        </HeaderControls>
      </HeaderFrame>
    )
}