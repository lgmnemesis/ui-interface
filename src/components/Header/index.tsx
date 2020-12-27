import { useTranslation } from 'react-i18next'
import {HeaderFrame, HeaderRow, HeaderLinks, StyledNavLink} from './styles'

export const Header = () => {
  const { t } = useTranslation()

    return (
      <HeaderFrame>
        <HeaderRow>
          <HeaderLinks>
            <StyledNavLink id={`home-nav-link`} to={'/home'}>
              {t('home')}
            </StyledNavLink>
          </HeaderLinks>
        </HeaderRow>
      </HeaderFrame>
    )
}