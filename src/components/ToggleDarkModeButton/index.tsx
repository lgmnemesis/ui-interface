import { useContext } from 'react'
import { StoreContext } from '../../store/context'

export const ToggleDarkModeButton = () => {
  const { globalState, globalDispatch} = useContext(StoreContext)

  return (
    <button type="button" onClick={() => {globalDispatch({type: 'DARK_MODE', isDarkMode: !globalState.isDarkMode})}}>
      isDarkMode {globalState.isDarkMode ? 'true' : 'false'}
    </button>
  )
}