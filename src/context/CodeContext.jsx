import { createContext, useState } from "react";

export const Context = createContext()

export const CodeContext = ({children}) => {
    const [code, setCode] = useState("")
    return (
        <Context.Provider value={{ code, setCode }}>
            {children}
        </Context.Provider>
    )
}