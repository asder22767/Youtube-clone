import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import SingleVideo from "./Pages/SingleVideo";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="video/:id" element={<SingleVideo/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App; 