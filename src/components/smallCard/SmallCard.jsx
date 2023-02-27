import img from "./../../assets/smallCardImg.jpg";
import userPic from "./../../assets/cardImg.png"
import { Cards } from "../cards/Cards";

export function SmallCard () {
    return (
    <div>
        <div className="flex items-center mb-7">
            <img src={userPic} alt="Dollie Blair" />

            <h2 className="ml-4 font-semibold">Dollie Blair</h2>
        </div>

        <ul className="flex space-x-10">
            <Cards image={img}/>

            <Cards image={img}/>

            <Cards image={img}/>

            <Cards image={img}/>
        </ul>
    </div>
    );
};