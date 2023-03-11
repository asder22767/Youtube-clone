import Layout from "../components/Layout";
import NotAvailable from "../components/NotAvailable";

const NotFound = () => {
  return (
    <Layout isSinglePage={true}>
      <NotAvailable />
    </Layout>
  );
};

export default NotFound;
