import { useContext } from 'react'
import { StoreContext } from '../../store/context'

export const ToggleDarkModeButton = () => {
  const { globalState, globalDispatch} = useContext(StoreContext)

  return (
    <button type="button" onClick={() => {globalDispatch({type: 'TOGGLE_DARK_MODE'})}}>
      isDarkMode {globalState.isDarkMode ? 'true' : 'false'}
    </button>
  )
}