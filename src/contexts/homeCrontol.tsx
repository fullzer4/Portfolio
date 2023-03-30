import { createContext, useState } from "react";

export const HomeContext = createContext<any>(()=>{})

export const HomeProvider = ({ children }: any) => {


    return(
        <HomeContext.Provider value={{
            }}> 
            {children}
        </HomeContext.Provider>
    )
}