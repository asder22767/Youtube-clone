import { Link } from "react-router-dom"

export function Buttons({ image, width, height, page = "/" }) {
  return (
    <li className="header__btn-items">
      <Link to={page} className="header__btns ">
        <img
          src={image}
          alt="icon"
          className="header__btn-img"
          width={width}
          height={height}
        />
      </Link>
    </li>
  )
}
