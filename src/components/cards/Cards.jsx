export function Cards ({ image, width }) {
    return (
        <li>
            <img src={image} alt="A Brief History Of Creation" className={`mb-3 ${width ? width : "w-64 h-36"}`}/>
            <h4 className="font-semibold">A Brief History Of Creation</h4>
            <div className="flex justify-between">
                <p className="text-grayish">80k views  ·  3 days ago</p>
                <p className="text-grayish">Dollie Blair</p>
            </div>
        </li>
    )
}