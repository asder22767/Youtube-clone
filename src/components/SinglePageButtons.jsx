import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined"
import ShareIcon from "@mui/icons-material/Share"
import { DownloadOutlined } from "@mui/icons-material"
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined"
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined"
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined"

const SinglePageButtons = ({ modal, setModal, toggleModal }) => {
  return (
    <div className="flex items-center space-x-2 relative">
      <div className="flex items-center">
        <button className="flex items-center py-2 px-3 bg-gray-100 rounded-l-3xl">
          <ThumbUpOutlinedIcon className="mr-2" />
          <span className="border-r-2 border-grayish pr-3">925</span>
        </button>
        <button className="flex items-center py-2 pr-3 bg-gray-100 rounded-r-3xl">
          <ThumbDownOutlinedIcon className="mr-2" />
        </button>
      </div>

      <button className="flex items-center py-2 px-3 bg-gray-100 rounded-3xl">
        <ShareIcon className="mr-1" />
        Share
      </button>

      <button className="flex items-center py-2 px-3 bg-gray-100 rounded-3xl">
        <LibraryAddOutlinedIcon className="mr-1" />
        Save
      </button>

      <button
        onClick={toggleModal}
        className="flex items-center py-2 px-2 bg-gray-100 rounded-circle"
      >
        <MoreHorizOutlinedIcon />
      </button>

      {modal && (
        <ul className="space-y-3 p-4 bg-gray-50 rounded-xl fixed bottom-0 right-0 translate-x-left translate-y-top">
          <li className="flex space-x-4">
            <ContentCutOutlinedIcon />
            <p>Clip</p>
          </li>

          <li className="flex space-x-4">
            <DownloadOutlined />
            <p>Download</p>
          </li>

          <li className="flex space-x-4">
            <SubtitlesOutlinedIcon />
            <p>Show transcript</p>
          </li>

          <li className="flex space-x-4">
            <FlagOutlinedIcon />
            <p>Report</p>
          </li>
        </ul>
      )}
    </div>
  )
}

export default SinglePageButtons
