import img from "./../assets/recImg.png";

export function MiddleCard () {
    return (
    <div>
        <h2 className="mb-7">Recommended</h2>

        <ul className="flex space-x-10 flex-nowrap">
            <li className="w-400">
                <img src={img} alt="A Brief History Of Creation" className="mb-3"/>
                <h4>A Brief History Of Creation</h4>
                <div className="flex justify-between">
                    <p>80k views  ·  3 days ago</p>
                    <p>Dollie Blair</p>
                </div>
            </li>
            <li className="w-400">
                <img src={img} alt="A Brief History Of Creation" className="mb-3"/>
                <h4>A Brief History Of Creation</h4>
                <div className="flex justify-between">
                    <p>80k views  ·  3 days ago</p>
                    <p>Dollie Blair</p>
                </div>
            </li>
        </ul>
    </div>
    );
};