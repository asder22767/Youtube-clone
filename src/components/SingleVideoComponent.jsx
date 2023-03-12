import ListVideos from "./ListVideos"
import { Rendering } from "./../utils/Rendering"
import { SingleVideoRendering } from "../utils/SingleVideoRendering"
import { BASE_URL } from "../utils/constantas"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import SinglePageButtons from "./SinglePageButtons"
import SinglePageSubs from "./SinglePageSubs"
import Description from "./Description"

const SingleVideoComponent = () => {
  const data = Rendering(BASE_URL + "books")
  const id = useParams()
  const search = BASE_URL + "books/" + id.id
  const videoInfo = SingleVideoRendering(search, id)
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <section onClick={modal ? toggleModal : ""}>
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
              <div className="flex space-x-3 mb-3">
                <h3 className="text-xl font-bold">{videoInfo.name}</h3>
                <Link className="text-blue-500 text-xl font-bold">
                  @begreater
                </Link>
              </div>

              <div className="flex justify-between mb-3">
                <SinglePageSubs />

                <SinglePageButtons
                  modal={modal}
                  setModal={setModal}
                  toggleModal={toggleModal}
                />
              </div>

              <Description />
            </div>
          </div>
          <div className="right">
            <ListVideos posts={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleVideoComponent
