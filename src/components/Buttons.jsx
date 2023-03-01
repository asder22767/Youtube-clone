export function Buttons ({ image, width, height }) {
    return (
        <li className="header__btn-items">
        <button className="header__btns ">
            <img src={image} alt="icon" className="header__btn-img" width={width} height={height} />
        </button>
    </li>
    )
}