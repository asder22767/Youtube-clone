import axios from "axios";
import { useEffect, useState } from "react";

export function Rendering(URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return data;
}
