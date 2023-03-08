import { createContext, } from "react";

const SinglePageContext = createContext();

const SinglePageContextProvider = ({ children }) => {

    return (
        <SinglePageContext.Provider>
            {children}
        </SinglePageContext.Provider>
    )
}
    
export default SinglePageContext;