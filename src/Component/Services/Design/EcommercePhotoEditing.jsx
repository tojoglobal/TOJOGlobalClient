import HeroText from "../../UniversalComponent/HeroText/HeroText";
import ServicesComponent from "../../UniversalComponent/ServiceUniCom/ServicesComponent";
import { Helmet } from "react-helmet-async";

const EcommercePhotoEditing = () => {
  return (
    <>
      <Helmet>
        <title>TOJO Global - E-commerce Photo Editing </title>
        <link
          rel="canonical"
          href="https://www.tojoglobal.com/services/design/e-commerce-photo-editing/"
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
              img: "Tojo images-25.png",
              title1: "E-commerce",
              title2: "Photo Editing",
              text: "Convert browsers into buyers with stunning product photos. TOJO Global's E-commerce Photo Editing elevates your online store, boosting conversions and sales. Get started today!",
            }}
          />

          {/* blog text &#39; */}
          <div className="services_text">
            <p>
              In today&#39;s competitive online marketplace, high-quality
              product photos are no longer a luxury, they&#39;re a necessity.
              TOJO Global&#39;s E-commerce Photo Editing service transforms your
              product images into conversion-boosting masterpieces. Our expert
              team removes distracting backgrounds, leaving your products center
              stage. We then meticulously retouch imperfections, ensuring a
              polished and professional look. Finally, we optimize the images
              for online platforms, guaranteeing fast loading times and a
              seamless customer experience. The result? Stunning visuals that
              capture attention, increase click-through rates, and turn website
              visitors into loyal customers. Don&#39;t let blurry or poorly lit
              photos hold your business back. Invest in professional E-commerce
              Photo Editing and unlock the full potential of your online store!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommercePhotoEditing;
