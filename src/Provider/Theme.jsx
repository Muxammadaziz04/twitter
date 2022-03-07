import React, { useState } from "react"


export const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(false)
    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            <ThemeContext.Consumer>
                {()=>children}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider