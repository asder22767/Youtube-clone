import subsuser from "./../assets/images/subsuser.png"

const SinglePageSubs = () => {
  return (
    <div className="flex items-center">
      <img
        className="mr-3 shrink-0"
        src={subsuser}
        alt="icon"
        width={40}
        height={40}
      />
      <div className="mr-4">
        <h3>TheGreatReset</h3>
        <p className="text-gray-600">9.2k subscribers</p>
      </div>
      <button className="py-2 px-3 bg-black rounded-3xl text-white">
        Subscribe
      </button>
    </div>
  )
}

export default SinglePageSubs
