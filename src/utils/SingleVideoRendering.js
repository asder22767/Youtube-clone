import axios from "axios";
import { useEffect, useState } from "react";

export function SingleVideoRendering(search, id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(search)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return data;
}
