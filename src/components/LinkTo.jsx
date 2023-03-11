import { Link } from "react-router-dom";

export function LinkTo({ avatar, title, width, height }) {
  return (
    <li className="side-bar__subs-items">
      <Link to={"/"}>
        <div className="side-bar__btn flex items-center text-sideBar">
          <img
            src={avatar}
            alt="icon"
            className="side-bar__icon mr-4"
            width={width ? width : 26}
            height={height ? height : 26}
          />
          {title}
        </div>
      </Link>
    </li>
  );
}
