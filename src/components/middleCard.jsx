import img from "./../assets/images/recImg.png";
import { Cards } from "./Cards";

export function MiddleCard({ data }) {
  return (
    <div className="w-1200 flex flex-col">
      <h2 className="mb-7 font-bold">Recommended</h2>

      <ul className="flex overflow-x-scroll scrollbar-hide space-x-10 w-1190">
        {data.map((item, i) => (
          <Cards key={i} image={img} width={"w-400"} post={item} />
        ))}
      </ul>
    </div>
  );
}
