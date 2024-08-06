import { useState, createContext } from "react";

export const pagesContext = createContext();
export const updatePagesContext = createContext();

export default function PagesContextProvider({ children }){
    const [pages, setPages] = useState({home: true, menu: false, loc: false})
    return (
        <pagesContext.Provider value={pages}>
            <updatePagesContext.Provider value={setPages}>
                { children }
            </updatePagesContext.Provider>
        </pagesContext.Provider>
    )
}