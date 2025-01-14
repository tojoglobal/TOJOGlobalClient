import HeroText from "../UniversalComponent/HeroText/HeroText";
import ClinetImage from "./ClinetImage";
import { Helmet } from "react-helmet-async";
import { TrustedClientList } from "../UniversalComponent/JSON/TrustedClientList";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>TOJO Global - Clients</title>
      </Helmet>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Happy",
              text2: "Clients",
              description:
                "Your one-stop digital place. We provide a full range of services, including marketing, management, development, design, listing, and customizable packages, to empower your business for success in the digital age.",
            }}
          />

          {/* other text */}
          <div className="client_image_div">
            <div className="row d-flex justify-content-center align-items-center">
              {TrustedClientList.length > 0 ? (
                TrustedClientList.map((d, i) => (
                  <ClinetImage
                    clientInfoImg={{
                      imgName: d.name,
                      imageUrl: d.logo,
                      index: i,
                    }}
                    key={i}
                  />
                ))
              ) : (
                <p> No data available </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
