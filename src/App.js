import "./css/output.css";
import { MiddleCard } from "./components/middleCard";
import { SmallCard } from "./components/SmallCard";
import { Rendering } from "./utils/Rendering";
import { BASE_URL } from "./utils/constantas";
import Layout from "./components/Layout";

function App() {

  const data = Rendering(BASE_URL + "books");
  return (
    <Layout>
       <div className="space-y-16 pl-270">
          <SmallCard data={data}/>
              
          <MiddleCard data={data}/>
            
          <SmallCard data={data}/>
        </div>
    </Layout>
  );
}

export default App;