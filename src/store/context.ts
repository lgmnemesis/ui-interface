import { createContext } from 'react'
import { GlobalContextType } from './useGlobalState'

export const StoreContext = createContext<GlobalContextType>(undefined!)