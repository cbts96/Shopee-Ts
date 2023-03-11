import { createContext } from "react"
import { getAccessTokenFromLS } from "src/utils/auth"

interface AppContextInterface {
  isAuth: boolean
  setIsAuth:()=> void 
}
const initialAppContext:AppContextInterface={
  isAuth: Boolean(getAccessTokenFromLS()),
  setIsAuth:()=> null
}
export const AppContext=createContext<AppContextInterface>(initialAppContext)