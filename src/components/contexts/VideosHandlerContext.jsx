import { createContext } from "react";

const VideosHandler = createContext()

const VideosHandlerContextProvider = ({ children }) => {
  return (
    <VideosHandler.Provider>
        {children}
    </VideosHandler.Provider>
  )
}

export default VideosHandlerContext