import { useReducer } from 'react'

export interface GlobalAction extends GlobalState {
  type?: 'DARK_MODE'
}

export interface GlobalState {
  isDarkMode?: boolean
}

export type GlobalContext = {
  globalState: GlobalState
  globalDispatch: React.Dispatch<GlobalAction>
}

const reducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case 'DARK_MODE':
      return {
        isDarkMode: action.isDarkMode
      }
    default:
      return state
  }
}

const initialState: GlobalState = {
  isDarkMode: true
}

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState)
  return {globalState, globalDispatch}
}

export default useGlobalState