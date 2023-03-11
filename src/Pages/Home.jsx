import Layout from "../components/Layout";
import { VideosList } from "../components/VideosList";
import { BASE_URL } from "../utils/constantas";
import { Rendering } from "../utils/Rendering";

const Home = () => {
  const data = Rendering(BASE_URL + "books");

  return (
    <Layout>
      <VideosList posts={data} />
    </Layout>
  );
};

export default Home;
