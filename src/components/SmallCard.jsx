import img from "./../assets/smallCardImg.jpg";
import userPic from "./../assets/cardImg.png"
import { Cards } from "./Cards";

export function SmallCard ({ data }) {
    return (
    <div className="w-1190 flex flex-col">
        <div className="flex items-center mb-7">
            <img src={userPic} alt="Dollie Blair" />

            <h2 className="ml-4 font-bold">Dollie Blair</h2>
        </div>

        <ul className="flex overflow-x-scroll scrollbar-hide space-x-10 w-1190">
            {data.map((item, i) => (
                <Cards key={i} image={img} width={"w-64"} post={item}/>
            ))}
        </ul>
    </div>
    );
};