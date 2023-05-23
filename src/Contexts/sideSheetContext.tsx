import React, { createContext, useState } from "react";

interface ContextProps {
    sideSheetGlobalOpen: boolean;
    setSideSheetGlobalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideSheetContext = createContext<ContextProps>({
    sideSheetGlobalOpen: false,
    setSideSheetGlobalOpen: () => false,
})

export const SideSheetProvider = ({ children }: any) => {
    const [sideSheetGlobalOpen, setSideSheetGlobalOpen] = useState(false);
    
    return (
        <SideSheetContext.Provider
        value={{sideSheetGlobalOpen, setSideSheetGlobalOpen}}>
            {children}

        </SideSheetContext.Provider>
    )
}