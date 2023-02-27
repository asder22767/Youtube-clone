import "./css/output.css";
import { Header } from "./components/header/Header";
import { MiddleCard } from "./components/middleCard/middleCard";
import { SideBar } from "./components/sideBar/SideBar";
import { SmallCard } from "./components/smallCard/SmallCard";
import { Rendering } from "./renderingProcess/Rendering";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("https://63eb2069fb6b6b7cf7d842ca.mockapi.io/examproject/books")
      .then((res) => res.json())
      .then((json) => {
          json = setData;
      });
  }, []);

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