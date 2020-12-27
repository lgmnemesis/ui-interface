
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
`
export default function App() {
  return (
    <Suspense fallback={null}>
      <AppWrapper>
        <HeaderWrapper>
          <div className="App">
            moshe
          </div>
        </HeaderWrapper>
        <BodyWrapper>
          <p>moshe bosy</p>
          <ToggleDarkModeButton />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}