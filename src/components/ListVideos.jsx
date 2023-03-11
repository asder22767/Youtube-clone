import img from "./../assets/images/smallCardImg.jpg";
import { SinglePageCards } from "./SinglePageCards";

const ListVideos = ({ posts }) => {
  return (
    <ul>
      {posts.map((item, i) => {
        return <SinglePageCards key={i} image={img} post={item} />;
      })}
    </ul>
  );
};

export default ListVideos;
