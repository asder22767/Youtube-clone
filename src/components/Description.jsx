import { useState } from "react"
import { Link } from "react-router-dom"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Description = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [hasMusic, setHasMusic] = useState(false)
  const [isHiddenText, setIsHiddenText] = useState(true)

  const overFlowHandler = () => {
    setIsHidden(!isHidden)
  }

  const hiddenTextHandler = () => {
    setIsHiddenText(false)
  }

  return (
    <div
      className={`p-3 bg-gray-100 rounded-xl text-sm font-roboto ${
        isHidden && "overflow-hidden h-100"
      }`}
    >
      <div className="mb-4">
        <div className="flex space-x-2 font-bold">
          <p className="">
            <span className="">1.3M</span> views
          </p>
          <p>
            <span>9</span> days ago
          </p>
        </div>
        <p>
          ''They don't want you to watch this'' - Andrew Tate - The most life
          changing and important message from Tate himself.
        </p>
      </div>
      <div>
        <div className={`${isHidden && "mb-3"} flex space-x-3`}>
          <p className="">ORIGINAL CREATOR:</p>
          {isHidden && (
            <button
              type="button"
              className="text-bold"
              onClick={overFlowHandler}
            >
              Show more
            </button>
          )}
        </div>
        <Link to={"/channel"} className="text-blue-500 font-bold">
          @begreater
        </Link>

        {!hasMusic && (
          <div className="mt-3">
            <span className="inline-block w-full h-5px bg-gray-300 mb-4"></span>
            <h3 className="font-bold  text-lg">Music</h3>
            <ul>
              <li className="py-3 border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <p>Song</p>
                  <Link to={"/channel"} className="text-blue-500">
                    Another Love
                  </Link>
                </div>
              </li>

              <li className="py-3 border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <p>Artist</p>
                  <Link to={"/channel"} className="text-blue-500">
                    Tom Odell
                  </Link>
                </div>
              </li>

              <li className="py-3 border-b border-gray-300">
                <div className="flex justify-between items-center">
                  <p>Writers</p>
                  <p>Tom Odell</p>
                </div>
              </li>

              <li
                onClick={hiddenTextHandler}
                className="py-3 border-b border-gray-300"
              >
                <div
                  className={`flex ${
                    !isHiddenText ? "flex-col" : "justify-between "
                  }`}
                >
                  <p>Licences</p>
                  {isHiddenText && (
                    <button
                      onClick={hiddenTextHandler}
                      className="inline-block w-6 h-6"
                    >
                      <ExpandMoreIcon />
                    </button>
                  )}

                  {!isHiddenText && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet.
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Description
