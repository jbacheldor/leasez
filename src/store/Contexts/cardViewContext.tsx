import React, { createContext, useState } from "react";

interface ContextProps {
    cardViewGlobalSkinny: boolean;
    setCardViewGlobalSkinny: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardViewContext = createContext<ContextProps>({
    cardViewGlobalSkinny: false,
    setCardViewGlobalSkinny: () => false,
})

export const CardViewProvider = ({ children }: any) => {
    const [cardViewGlobalSkinny, setCardViewGlobalSkinny] = useState(false);
    
    return (
        <CardViewContext.Provider
        value={{cardViewGlobalSkinny, setCardViewGlobalSkinny}}>
            {children}

        </CardViewContext.Provider>
    )
}