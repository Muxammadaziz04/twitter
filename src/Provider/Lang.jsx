import React, { useState } from "react";
import ru from "../Lang/ru.json";
import uz from "../Lang/uz.json";
import eng from "../Lang/eng.json";

export const LangContext = React.createContext()

const LangProvider = ({ children }) => {
    const [Lang, setLang] = useState(eng)

    function changeLang(value) {
        switch (value) {
            case 'uz': setLang(uz); break;
            case 'ru': setLang(ru); break;
            case 'eng': setLang(eng); break;        
            default: setLang(eng)
        }
    }

    return (
        <LangContext.Provider value={{ Lang, changeLang }}>
            <LangContext.Consumer>
                {()=>children}
            </LangContext.Consumer>
        </LangContext.Provider>
    )
}

export default LangProvider;