import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import SingleVideoComponent from "../components/SingleVideoComponent";

export default function SingleVideo() {
  const params = useParams();
  return (
    <Layout isSinglePage={true}>
      <SingleVideoComponent />
    </Layout>
  );
}
