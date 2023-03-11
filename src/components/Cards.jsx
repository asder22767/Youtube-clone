import { Link } from "react-router-dom";

function singlePageHandler() {
  // setIsSinglePage = true;
}

export function Cards({ image, width, margin, post }) {
  return (
    <li
      onClick={singlePageHandler}
      className={`width flex-shrink-0 ${width} ${margin} mb-10`}
    >
      <Link to={"video/" + post.id}>
        <img
          src={image}
          alt="A Brief History Of Creation"
          className={`mb-3 rounded-xl ${width}`}
        />

        <div>
          <h4 className="font-bold">{post.name}</h4>
          <p className="text-grayish">Dollie Blair</p>
          <p className="text-grayish">80k views · 3 days ago</p>
        </div>
      </Link>
    </li>
  );
}
