import { Link } from "react-router-dom";
import HeroText from "../../UniversalComponent/HeroText/HeroText";
import { TrustedClientList } from "../../UniversalComponent/JSON/TrustedClientList";

const Listing = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <div className="univarsal_text_div" data-aos="fade-down">
            <h1 className="text-center">
              {" "}
              <span className="headdingGradientText me-3">Services</span>
              Listing
            </h1>
            {/* <p className="topPeraDesText">
              At Tojo Global, we have a dedicated team that specializes in
              listing services. We know that getting a project listed on big
              kexchanges can be hard and take a lot of time. We know how to deal
              with these problems and get your project listed quickly and easily
              because our team has done it before. We keep in close touch with
              exchange providers and follow their rules and requirements. We
              also help and guide you through the whole selling process, from
              getting the paperwork ready to handling the listing fee. Our help
              will help your project meet more people and get more trades, which
              can eventually lead to more adoption and success
            </p> */}
            {/* blog text &#39; */}
            <div className="listing_services_text_div">
              <p className="listing_services_PeraDesText">
                At Tojo Global, we have a dedicated team that specializes in
                listing services. We know that getting a project listed on big
                kexchanges can be hard and take a lot of time. We know how to
                deal with these problems and get your project listed quickly and
                easily because our team has done it before. We keep in close
                touch with exchange providers and follow their rules and
                requirements. We also help and guide you through the whole
                selling process, from getting the paperwork ready to handling
                the listing fee. Our help will help your project meet more
                people and get more trades, which can eventually lead to more
                adoption and success.
              </p>

              {/* Package services dynamically listed */}
              <div className="about-basics-benefits-content about_col_list_items">
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={1 * 200}
                >
                  <span>Cheapest prices for single or package listings.</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={2 * 200}
                >
                  <span>Minimize Delays, Maximize Speed!</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={3 * 200}
                >
                  <span>Positioning in queue ahead of others.</span>
                </div>
                <div
                  className="about_basics_benefits_item"
                  data-aos="fade-up"
                  data-aos-delay={4 * 200}
                >
                  <span>No extra charges for promotion and marketing.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="client_image_div listing_proposal">
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

          <div className="hero_btn_style d-flex justify-content-center">
            <Link to="/contact">
              <button className="custombtn hero_btn2">GET A PROPOSAL</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
