import img from "./../../assets/recImg.png";
import { Cards } from "../cards/Cards";

export function MiddleCard () {
    return (
    <div>
        <h2 className="mb-7 font-semibold">Recommended</h2>

        <ul className="flex space-x-10">
            <Cards image={img} width={"w-400 h-64"}/>

            <Cards image={img} width={"w-400 h-64"}/>
        </ul>
    </div>
    );
};