import Layout from "@/components/Layout/Layout";
import FullWidthImage from "@/components/FullWidthImage/FullWidthImage";
import AboutContainer from "@/components/AboutContainer/AboutContainer";
import ProjectsContainer from "@/components/ProjectsContainer/ProjectsContainer";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <h1>Welcome to my website</h1>
      </Layout>
      <FullWidthImage />
      <AboutContainer />
      <ProjectsContainer />
    </div>
  );
};

export default Homepage;
