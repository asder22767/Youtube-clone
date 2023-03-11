import img from "./../assets/images/smallCardImg.jpg";
import { Cards } from "./Cards";

export function VideosList({ posts }) {
  return (
    <div className="w-1200 flex flex-col">
      <ul className="flex flex-wrap w-1190">
        {posts.map((item, i) => {
          if ((i + 1) % 4 === 1) {
            return <Cards key={i} image={img} width={"w-72"} post={item} />;
          } else {
            return (
              <Cards
                key={i}
                image={img}
                width={"w-72"}
                margin={"ml-4"}
                post={item}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
