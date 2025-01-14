import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";
import { Helmet } from "react-helmet-async";

const WebDesign = () => {
  return (
    <>
      <Helmet>
        <title>TOJO Global - Web Design</title>
        <link
          rel="canonical"
          href="https://www.tojoglobal.com/services/design/web-design/"
        />
      </Helmet>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services/",
              text2: "Design",
              description:
                "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age.",
            }}
          />

          <ServicesComponent
            services={{
              img: "Tojo images-20.png",
              title1: "Web",
              title2: "Design",
              text: "Get advantage of data-driven web design services,for attractive, extremely useful, and well-ranked websites that increase sales.              ",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              Web design is the process of creating visually appealing and
              user-friendly websites. It helps businesses grow by providing an
              online platform to showcase products or services, engage with
              customers, and drive conversions. A well-designed website enhances
              brand credibility, improves user experience, and increases online
              visibility, leading to higher traffic, sales, and business growth.
            </p>
            <p>
              Making a website is not an easy job. You need to know a lot about
              both technology and marketing to make a website that will attract,
              engage, and convert visitors. Some people might find the process
              scary, but that&#39;s exactly where we shine. Our team is made up
              of pros from different fields, such as a project manager, web
              designer, front-end developer, back-end developer, and quality
              assurance engineer. Along with web designers and developers, we
              also have a skilled marketing team ready to help you get the word
              out about your digital goods. Our goal is to make your goods stand
              out in the digital world, and we do everything from marketing
              strategy to SEO.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDesign;
