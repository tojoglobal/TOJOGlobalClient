import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import Typed from "typed.js";
import { useEffect, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

function NavbarNav() {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".navbar_multiple_text", {
      strings: ["Book a Intro Call"],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);

  //   var element = document.getElementById("responsive-navbar-nav");
  //   element.classList.remove("show");
  // };

  return (
    <div className="div_one_background">
      <div className="heroTopGradinet"></div>
      <Navbar expand="lg" className="navbar_style">
        <Container className="navbar_container">
          {/* website logo */}
          <Navbar.Brand>
            <NavLink to="/">
              <img src="/Images/tojoGlobalIcon.svg" alt="TOJO Global Logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={`navbar_items ${clicked ? "hide" : ""}`}>
              <Nav>
                {/* home page  */}
                <NavLink to="/" className="nav_text">
                  Home
                </NavLink>
                {/* about us page */}
                <NavLink to="/about-us" className="nav_text">
                  About Us
                </NavLink>

                {/* Services items */}
                <nav className="menu_bar nav_text submenubar_text">
                  <ul>
                    <li className="menu_item">
                      <div className="menu_services">
                        <span>Services</span>
                        <IoIosArrowDown className="icon_bar" />
                      </div>
                      <div className="dropdown_menu">
                        <ul className="submenu_list">
                          {/* Management submenu items  */}
                          <li className="submenu_services_list">
                            <div className="submenu_servces_name">
                              <span className="subMainfont">Management</span>
                            </div>
                            <div className="dropdown_submenu ">
                              <ul>
                                <li>
                                  <NavLink
                                    to="/services/mangement/community-management"
                                    className="dropdown-item"
                                  >
                                    Community Management
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/mangement/social-media-management"
                                    className="dropdown-item"
                                  >
                                    Social Media Management
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/mangement/social-media-moderation"
                                    className="dropdown-item"
                                  >
                                    Social Media Moderation
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </li>
                          {/* Marketing submenu itmes */}
                          <li className="submenu_services_list">
                            <div className={`submenu_servces_name`}>
                              Marketing
                            </div>
                            <div className="dropdown_submenu ">
                              <ul>
                                <li>
                                  <NavLink
                                    to="/services/marketing/on-page-seo"
                                    className="dropdown-item"
                                  >
                                    SEO (On-Page)
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/marketing/on-page-seo"
                                    className="dropdown-item"
                                  >
                                    SEO (Off-Page)
                                  </NavLink>
                                </li> */}
                                <li>
                                  <NavLink
                                    to="/services/marketing/socail-media-marketing"
                                    className="dropdown-item"
                                  >
                                    Social Media Marketing (SMM)
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/marketing/search-engine-marketing"
                                    className="dropdown-item"
                                  >
                                    Search Engine Marketing (SEM)
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/marketing/amazon-marketing"
                                    className="dropdown-item"
                                  >
                                    Amazon Marketing
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/marketing/content-marketing"
                                    className="dropdown-item"
                                  >
                                    Content Marketing
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/marketing/influencer-marketing"
                                    className="dropdown-item"
                                  >
                                    Influencer Marketing
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/marketing/lead-genaration"
                                    className="dropdown-item"
                                  >
                                    Lead Generation
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </li>

                          {/* Development submenu itmes */}
                          <li className="submenu_services_list">
                            <div className={`submenu_servces_name`}>
                              Development
                            </div>
                            <div className="dropdown_submenu ">
                              <ul>
                                <li>
                                  <NavLink
                                    to="/services/development/blockchain-development"
                                    className="dropdown-item"
                                  >
                                    Blockchain Development
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/development/crypto-token-development"
                                    className="dropdown-item"
                                  >
                                    Crypto Token Development
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/development/NFT Platform Development"
                                    className="dropdown-item"
                                  >
                                    NFT Platform Development
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/development/crypto-token-development"
                                    className="dropdown-item"
                                  >
                                    Play-to-Earn Game Development
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/development/web-development"
                                    className="dropdown-item"
                                  >
                                    Web Development
                                  </NavLink>
                                </li> */}
                                <li>
                                  <NavLink
                                    to="/services/development/app-development"
                                    className="dropdown-item"
                                  >
                                    App Development
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/development/woocommerce-development"
                                    className="dropdown-item"
                                  >
                                    WooCommerce Development
                                  </NavLink>
                                </li> */}
                                <li>
                                  <NavLink
                                    to="/services/development/wordpress-development"
                                    className="dropdown-item"
                                  >
                                    Wordpress Development
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </li>

                          {/* Graphics & Visuals submenu items*/}
                          <li className="submenu_services_list">
                            <div className={`submenu_servces_name`}>
                              Graphics & Visuals
                            </div>
                            <div className="dropdown_submenu ">
                              <ul>
                                <li>
                                  <NavLink
                                    to="/services/design/logo-design"
                                    className="dropdown-item"
                                  >
                                    Logo Design
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/design/stationery-design"
                                    className="dropdown-item"
                                  >
                                    Stationery Design
                                  </NavLink>
                                </li> */}
                                <li>
                                  <NavLink
                                    to="/services/design/social-media-design"
                                    className="dropdown-item"
                                  >
                                    Social Media Design
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/design/e-commerce-photo-editing"
                                    className="dropdown-item"
                                  >
                                    Ecommerce Photo Editing
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/white-paper-design"
                                    className="dropdown-item"
                                  >
                                    White Paper Design
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/web-design"
                                    className="dropdown-item"
                                  >
                                    Web design
                                  </NavLink>
                                </li> */}
                                <li>
                                  <NavLink
                                    to="/services/design/ui-ux-design"
                                    className="dropdown-item"
                                  >
                                    UI/UX design
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </li>
                          {/* Video editing submenu items*/}
                          <li className="submenu_services_list">
                            <div className={`submenu_servces_name`}>
                              Video editing
                            </div>
                            <div className="dropdown_submenu ">
                              <ul>
                                <li>
                                  <NavLink
                                    to="/services/videos/motion-graphics"
                                    className="dropdown-item"
                                  >
                                    Motion Graphics
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/services/videos/video-editing"
                                    className="dropdown-item"
                                  >
                                    VFX
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/design/social-media-design"
                                    className="dropdown-item"
                                  >
                                    YouTube Video
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/e-commerce-photo-editing"
                                    className="dropdown-item"
                                  >
                                    Brand Video
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/white-paper-design"
                                    className="dropdown-item"
                                  >
                                    Podcast Video
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/web-design"
                                    className="dropdown-item"
                                  >
                                    Explainer Video
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/ui-ux-design"
                                    className="dropdown-item"
                                  >
                                    Documentary
                                  </NavLink>
                                </li> */}
                              </ul>
                            </div>
                          </li>
                          {/* Content submenu items*/}
                          <li className="submenu_services_list">
                            <div className={`submenu_servces_name`}>
                              Content
                            </div>
                            <div className="dropdown_submenu ">
                              <ul>
                                <li>
                                  <NavLink
                                    to="/services/content/web-content-writing"
                                    className="dropdown-item"
                                  >
                                    Web Content Writing
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/design/stationery-design"
                                    className="dropdown-item"
                                  >
                                    Product Descriptions
                                  </NavLink>
                                </li> */}
                                <li>
                                  <NavLink
                                    to="/services/content/white-paper-content"
                                    className="dropdown-item"
                                  >
                                    White Paper Content
                                  </NavLink>
                                </li>
                                {/* <li>
                                  <NavLink
                                    to="/services/design/e-commerce-photo-editing"
                                    className="dropdown-item"
                                  >
                                    Blog Writing
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/white-paper-design"
                                    className="dropdown-item"
                                  >
                                    Technical Writing
                                  </NavLink>
                                </li> */}
                                {/* <li>
                                  <NavLink
                                    to="/services/design/web-design"
                                    className="dropdown-item"
                                  >
                                    Case Studies
                                  </NavLink>
                                </li> */}
                              </ul>
                            </div>
                          </li>
                          {/*listing submeu page  */}
                          <li className="submenu_services_list">
                            <div
                              className={`submenu_servces_name`}
                              style={{ textAlign: "center" }}
                            >
                              <NavLink
                                to="/services/listing"
                                className="dropdown-item"
                              >
                                <span className="subMainfont">Listing</span>
                              </NavLink>
                            </div>
                          </li>
                          {/* packge submenu page  */}
                          <li className="submenu_services_list">
                            <div className={`submenu_servces_name`}>
                              {/* paaage page */}
                              <NavLink to="/packages" className="dropdown-item">
                                <span className="subMainfont">Packages</span>
                              </NavLink>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
                {/* clinet page */}
                <NavLink to="/clients" className="nav_text">
                  Clients
                </NavLink>

                {/* Company area start */}
                <nav className="menu_bar nav_text submenubar_text">
                  <ul>
                    <li className="menu_item">
                      <div className="menu_services">
                        <span>Company</span>
                        <IoIosArrowDown className="icon_bar" />
                      </div>

                      <div className="dropdown_menu comapny_dropdown_menu">
                        <ul className="submenu_list">
                          <li style={{ width: "148px" }}>
                            <NavLink
                              to="/about-us"
                              className="dropdown-item submenu_servces_name"
                            >
                              <span className="subMainfont">About</span>
                            </NavLink>
                          </li>

                          <li style={{ width: "148px" }}>
                            <NavLink
                              to="/team"
                              className="dropdown-item submenu_servces_name"
                            >
                              <span className="subMainfont">Team</span>
                            </NavLink>
                          </li>

                          <li style={{ width: "148px" }}>
                            <NavLink
                              to="/career"
                              className="dropdown-item submenu_servces_name"
                            >
                              <span className="subMainfont">Careers</span>
                            </NavLink>
                          </li>
                          <li style={{ width: "148px" }}>
                            <NavLink
                              to="/contact"
                              className="dropdown-item submenu_servces_name"
                            >
                              <span className="subMainfont">Contact</span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>

                {/* Packages page*/}
                <NavLink to="/packages" className="nav_text">
                  Packages
                </NavLink>
                {/* blog page  */}
                <NavLink to="/blog" className="nav_text">
                  Blog
                </NavLink>
              </Nav>
            </div>
            <div className="navbar_btn">
              <NavLink to="/contact">
                {/* fristBtn */}
                <button type="button" className="contactBtn secondBtn">
                  <span className="navbar_multiple_text"></span>
                </button>
              </NavLink>
            </div>
          </Navbar.Collapse>
          {/* responsive mobile and tablet menu bar  */}
          <div className="mobile_device">
            <ResponsiveMenu />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarNav;
