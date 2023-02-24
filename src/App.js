import "./css/output.css";
import { Header } from "./header/Header";
import { MiddleCard } from "./middleCard/middleCard";
import { SideBar } from "./sideBar/SideBar";
import { SmallCard } from "./smallCard/SmallCard";

function App() {
  return (
    <>
      <Header/>
      <main>
        <section className="home flex">
          <SideBar/>
          <div className="space-y-16">
            <SmallCard/>

            <MiddleCard/>
            
            <SmallCard/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;