import useGlobalState from './useGlobalState'
import { StoreContext } from './context'

const GlobalStateProvider = ({ children }: any) => {
  return  (
    <StoreContext.Provider value={useGlobalState()}>
      {children}
    </StoreContext.Provider>
  )
}

export default GlobalStateProvider