import { useReducer } from 'react'

interface GlobalAction {
  type: string
  isDarkMode: boolean
}

const reducer = (state: any, action: GlobalAction) => {
  switch (action.type) {
    case 'DARK_MODE':
      return {
        isDarkMode: action.isDarkMode
      }
    default:
      return state
  }
}

const initialState: GlobalAction = {
  type: '',
  isDarkMode: true
}

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState)
  return {globalState, globalDispatch}
}

export default useGlobalState