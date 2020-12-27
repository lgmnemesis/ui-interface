
import { Suspense } from 'react'
import styled from 'styled-components'
import { ToggleDarkModeButton } from '../components'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <Suspense fallback={null}>
      <AppWrapper>
        <HeaderWrapper>
          <div className="mosheclass">
            <p>moshe456</p>
          </div>
        </HeaderWrapper>
        <BodyWrapper>
          <p>moshe bosy</p>
          <ToggleDarkModeButton />
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}