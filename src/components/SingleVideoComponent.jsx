import ListVideos from "./ListVideos";
import { Rendering } from "./../utils/Rendering";
import { SingleVideoRendering } from "../utils/SingleVideoRendering";
import { BASE_URL } from "../utils/constantas";
import { useParams } from "react-router-dom";

const SingleVideoComponent = () => {
  const data = Rendering(BASE_URL + "books");
  const id = useParams();
  const search = BASE_URL + "books/" + id.id;
  const videoInfo = SingleVideoRendering(search, id);
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="flex">
          <div className="left  pl-8 pr-6">
            <div className="inline-block mb-2">
              <iframe
                width="940"
                height="530"
                src="https://www.youtube.com/embed/mVMt46CPwHo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h3 className="text-xl font-bold">{videoInfo.name}</h3>
            </div>
          </div>
          <div className="right">
            <ListVideos posts={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleVideoComponent;
