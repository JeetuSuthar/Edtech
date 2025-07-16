import { createContext } from "react";
export const AppContext = createContext()

export const AppContextProvider=(props)=>{
            const name ='123'
    const value=(
name
    )
    return (
        <AppContext.Provider value={name}>
            {props.children}
        </AppContext.Provider>
    )
}