import About from "../HomePage/About";
import OurValue from "../HomePage/OurValue";
import WhoWeAre from "./WhoWeAre";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="maindiv">
      <Helmet>
        <title>TOJO Global - About Us</title>
      </Helmet>
      <About />
      <WhoWeAre />
      <OurValue />
    </div>
  );
};

export default AboutPage;
