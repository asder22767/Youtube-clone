export function Cards ({ image, width, post }) {
    
    return (
        <li className={`width flex-shrink-0`}>
            <img src={image} alt="A Brief History Of Creation" className={`mb-3 rounded-xl`} width={width}/>

            <h4 className="font-bold">{post.name}</h4>

            <div className="flex justify-between">
                <p className="text-grayish">80k views  ·  3 days ago</p>

                <p className="text-grayish">Dollie Blair</p>
            </div>
        </li>
    )
}