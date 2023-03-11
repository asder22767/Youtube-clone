import "./Header.scss"
import burgerMenu from "./../assets/images/menu.svg"
import logo from "./../assets/images/logo.svg"
import camera from "./../assets/images/cameraIcon.svg"
import dots from "./../assets/images/dotsIcon.svg"
import notifications from "./../assets/images/bellIcon.svg"
import userPic from "./../assets/images/userpic.svg"
import { Buttons } from "./Buttons"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header pt-20">
      <div className="container mx-auto px-6 fixed top-0 left-0 bg-white py-4">
        <div className="header__wrapper flex justify-between items-center">
          <div className="header__wrapper-left flex items-center">
            <button
              type="button"
              title="burger-menu"
              className="header__burger-button outline-none border-none bg-none mr-4"
            >
              <img src={burgerMenu} alt="icon" width="20" height="17" />
            </button>

            <Link to={"/"} className="header__logo mr-28">
              <img src={logo} alt="Logo of Youtube" width="116" height="25" />
            </Link>

            <form className="header__form">
              <input
                type="text"
                className="header__input-search bg-input w-560 p-2 px-4 rounded-3xl"
                title="search"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="header__wrapper-right">
            <ul className="header__btn-list flex items-center space-x-10">
              <Buttons image={camera} width={27} height={20} />

              <Buttons image={dots} width={21} height={21} />

              <Buttons image={notifications} width={22} height={26} />

              <Buttons image={userPic} width={40} height={40} page={"/auth"} />
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
