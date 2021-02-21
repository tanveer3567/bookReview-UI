import { useState } from "react";
import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = (props) => {

    const [globalState, setGlobalState] = useState({
        isLoggedIn: false,
        globalName: ""
    });

    return (
        <GlobalContext.Provider value={[globalState, setGlobalState]}>
            {props.children}
        </GlobalContext.Provider>
    );
}

