import { useEffect, useState } from "react";

export function Rendering ( URL ) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((json) => {
            setData(json);
        });
    }, []);
    
    return data;
}