import { Link } from "react-router-dom";

export function SinglePageCards({ image, post }) {
  return (
    <li className={"flex-shrink-0"}>
      <Link to={"/video/" + post.id}>
        <div className="flex">
          <img
            src={image}
            alt="A Brief History Of Creation"
            className={`mb-3 rounded-xl w-40`}
          />

          <div className="ml-3">
            <h4 className="font-bold mt-2 mb-2">{post.name}</h4>
            <p className="text-grayish text-xs mb-1">Dollie Blair</p>
            <p className="text-grayish text-xs">80k views · 3 days ago</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
