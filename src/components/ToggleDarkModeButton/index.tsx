import { useContext } from 'react'
import Context from '../../store/context'

export const ToggleDarkModeButton = () => {
  const { globalState, globalDispatch} = useContext(Context)

  return (
    <button type="button" onClick={() => {globalDispatch({type: 'DARK_MODE', isDarkMode: !globalState.isDarkMode})}}>
      isDarkMode {globalState.isDarkMode ? 'true' : 'false'}
    </button>
  )
}