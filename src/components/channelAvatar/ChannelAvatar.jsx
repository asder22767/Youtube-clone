export function ChannelAvatar ({ avatar, title, width, height }) {
    return (
        <li className="side-bar__subs-items">
            <button type="button" className="side-bar__btn flex items-center text-sideBar" title={title}>
                <img src={avatar} alt="icon" className="side-bar__icon mr-4" width={width ? width : 26} height={height ? height : 26}/>
                {title}
            </button>
        </li>
    )
};