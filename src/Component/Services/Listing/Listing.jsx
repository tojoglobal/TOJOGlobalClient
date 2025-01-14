import { Link } from "react-router-dom";
import HeroText from "../../UniversalComponent/HeroText/HeroText";
import { TrustedClientList } from "../../UniversalComponent/JSON/TrustedClientList";

const Listing = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Services",
              text2: "Listing",
              description:
                "Your One-Stop Digital Shop.  We offer a complete suite of services including Management, Marketing, Development, Design, Listing, and customizable Packages to  empower your business for success in the digital age.",
            }}
          />

          <div className="hero_btn_style d-flex justify-content-center">
            <Link to="/contact">
              <button className="custombtn hero_btn2">GET A PROPOSAL</button>
            </Link>
          </div>
          <div className="client_image_div">
            <div className="row d-flex justify-content-center align-items-center">
              {TrustedClientList.length > 0 ? (
                TrustedClientList.map((d, i) => (
                  <div key={i} className="col-6 col-sm-6 col-md-4 client_item">
                    <img src={d.logo} alt={d.name} />
                  </div>
                ))
              ) : (
                <p> No data available </p>
              )}

              <div className="col-6 col-sm-6 col-md-4 client_item">
                <img src="/Images/logos/Logo-White.png" alt="Logo-White.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 client_item">
                <img
                  src="/Images/logos/Rackspace_Technology_Logo_RGB_WHT.png"
                  alt="Logo-White.png"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4 client_item">
                <img
                  src="/Images/logos/logo_ultron%201.png"
                  alt="Logo-White.png"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-4 client_item">
                <img
                  src="/Images/logos/62976bdd7ec76b82fb21fcf5.png"
                  alt="Logo-White.png"
                />
              </div>
            </div>
          </div>
          {/* Effortless listing domination */}
          <div className="text-center univarsal_text_div mt-1 mt-md-5">
            <h1 className="listing_heading section_price2">
              Effortless listing domination
            </h1>
            <p className="topPeraDesText">
              With TOJO Global&#39;s advanced listing of cryptocurrency
              approach, you can dominate the market and maximize sales by
              optimizing your online presence.
            </p>
            <div className="listing_section_border"></div>
          </div>

          {/* blog text &#39; */}
          <div className="services_text">
            <p className="topPeraDesText">
              At Tojo Global, we have a dedicated team that specializes in
              listing services. We know that getting a project listed on big
              kexchanges can be hard and take a lot of time. We know how to deal
              with these problems and get your project listed quickly and easily
              because our team has done it before. We keep in close touch with
              exchange providers and follow their rules and requirements. We
              also help and guide you through the whole selling process, from
              getting the paperwork ready to handling the listing fee. Our help
              will help your project meet more people and get more trades, which
              can eventually lead to more adoption and success.
            </p>
            <p className="topPeraDesText">
              Our mission is to give value to our clients by providing
              top-quality services. Advantages we offer:
            </p>
            <ul>
              <li>Cheapest prices for single or package listings.</li>
              <li>
                Fast service. Avoid the chance of delays and speed up the
                clearance process.
              </li>
              <li>Positioning in queue ahead of others.</li>
              <li>No extra charges for promotion and marketing.</li>
            </ul>
            <p className="topPeraDesText">
              Choose TOJO Global for a seamless path to market dominance, where
              your listings become the cornerstone of your success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
