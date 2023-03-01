import "./css/output.css";
import { Header } from "./components/Header";
import { MiddleCard } from "./components/middleCard";
import { SideBar } from "./components/SideBar";
import { SmallCard } from "./components/SmallCard";
import { Rendering } from "./utils/Rendering";
import { BASE_URL } from "./utils/constantas";
import axios from "axios";
import { useEffect } from "react";

function App() {

  const data = Rendering(BASE_URL + "books");
  return (
    <>
      <Header/>
      <main>
        <section className="home">
          <div className="flex container">
            <SideBar/>
            
            <div className="space-y-16 h-1000 overflow-y-scroll">
              <SmallCard data={data}/>
              
              <MiddleCard data={data}/>
            
              <SmallCard data={data}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;