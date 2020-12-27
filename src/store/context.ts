import { createContext } from 'react'
import { GlobalContext } from './useGlobalState'
const Context = createContext<GlobalContext>(undefined!)

export default Context