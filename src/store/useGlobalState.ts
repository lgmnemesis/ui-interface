import { useReducer } from 'react'
import { IS_DARK_MODE } from '../constants'

export interface GlobalAction extends GlobalState {
  type?: 
    'ENABLE_DARK_MODE'  | 
    'DISABLE_DARK_MODE' | 
    'TOGGLE_DARK_MODE'
}

export interface GlobalState {
  isDarkMode?: boolean
}

export type GlobalContextType = {
  globalState: GlobalState
  globalDispatch: React.Dispatch<GlobalAction>
}

const reducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case 'ENABLE_DARK_MODE':
      return setDarkMode(true)
    case 'DISABLE_DARK_MODE':
      return setDarkMode(false)
    case 'TOGGLE_DARK_MODE':
      const isDarkMode = !state?.isDarkMode ?? false
      return setDarkMode(isDarkMode)
    default:
      return state
  }
}

const initialState: GlobalState = {
  isDarkMode: true
}

const setDarkMode = (isDarkMode: boolean) => {
  try {
    window.localStorage.setItem(IS_DARK_MODE, String(isDarkMode))
  } catch (error) {
    console.error(error)
  }
  return {
    isDarkMode: isDarkMode
  }
}

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState)
  return {globalState, globalDispatch}
}

export default useGlobalState