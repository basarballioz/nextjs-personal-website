import Layout from "@/components/Layout/Layout";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage";
import AboutContainer from "@/components/AboutContainer/AboutContainer";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <h1>Welcome to my website</h1>
      </Layout>
      <FullWidthImage />
      <AboutContainer />
    </div>
  );
};

export default Homepage;
