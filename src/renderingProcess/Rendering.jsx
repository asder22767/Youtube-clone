import { useEffect, useState } from "react";

export function Rendering () {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://63eb2069fb6b6b7cf7d842ca.mockapi.io/examproject/books")
        .then((res) => res.json())
        .then((json) => {
            json = setData;
        });
    }, []);
    
    return data;
}