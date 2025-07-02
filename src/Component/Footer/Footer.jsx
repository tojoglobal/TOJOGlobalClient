import { Link, useLocation } from "react-router-dom";
import { FaXTwitter, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaBehance } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isMobileView } = useContext(AppContext);

  return (
    <>
      <div className="footer-div-style">
        <div className="container">
          {/* Conditionally render footer_box based on the current path */}
          {currentPath !== "/contact" && (
            <div className="footer_box">
              <div className="footer_boxbg">
                {isMobileView ? (
                  <img
                    src="/Images/footer/footerCardMobile.png"
                    alt="footerCard"
                  />
                ) : (
                  <img src="/Images/footer/FooterCard.png" alt="footerCard" />
                )}
              </div>
              <div className="footer_row_box row align-items-center justify-content-between">
                <div className="col-12 col-md-7 col-lg-5">
                  <div className="footer_box_text_div">
                    <h2 className="footer_heading">
                      Grow your business with us
                    </h2>
                    <div className="footer_box_services">
                      <div className="footer_box_services_div">
                        <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                        <p>Marketing</p>
                      </div>
                      <div className="footer_box_services_div">
                        <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                        <p>Management</p>
                      </div>
                      <div className="footer_box_services_div">
                        <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                        <p>Design</p>
                      </div>
                      <div className="footer_box_services_div">
                        <IoMdCheckmarkCircleOutline className="footer_box_icon" />
                        <p>Development</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-5 col-lg-7 footer_btn">
                  <div className="footer_box_btn_div">
                    <Link to="/contact" className="footer_box_btn">
                      <button className="customFooterBoxbtn1 custombtn secondBtn">
                        <span>Request A Free Call</span>
                      </button>
                    </Link>
                    <Link to="/packages" className="">
                      <button className="customFooterBoxbtn2 custombtn frisBtn ">
                        <span>Order Now</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="footer_menubar">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-4">
                <div className="footer_menubar_col_text">
                  <div className="footer_logo_style">
                    <img src="/tojoGlobalIcon.svg" alt="Logo" />
                    <p>
                      We&#39;re your one-stop shop for all things digital,
                      offering a complete range of services - Management,
                      Marketing, Development, Design, and Listing - to propel
                      your business forward.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-8">
                <div className="row footer_menubar_row">
                  <div className="col-6 col-md-6 col-lg-4 footer_menu">
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Resources</h5>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/services/development/blockchain-development">
                              Developers
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Reach Out Anytime</h5>
                          </li>

                          {currentPath !== "/contact" && (
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                          )}

                          <li>
                            <a
                              href="https://wa.me/8801333411624"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span
                                className="footerNumber"
                                style={{
                                  fontFamily: '"Barlow Condensed", sans-serif',
                                }}
                              >
                                +880 1333-411624
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@tojoglobal.com">
                              <span
                                style={{
                                  fontFamily: '"Barlow Condensed", sans-serif',
                                }}
                              >
                                hello@tojoglobal.com
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-4 footer_menu">
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Company</h5>
                          </li>
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/packages">Packages</Link>
                          </li>
                          <li>
                            <Link to="/home#faq">FAQs</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Let's get Connected</h5>
                          </li>
                          <li>
                            <Link to="/career">Career</Link>
                          </li>

                          <li>
                            <a href="mailto:career@tojoglobal.com">
                              <span
                                style={{
                                  fontFamily: '"Barlow Condensed", sans-serif',
                                }}
                              >
                                career@tojoglobal.com
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-4 footer_menu">
                    <div className="footer_menubar_col_text">
                      <div className="footer_menu_list">
                        <ul>
                          <li>
                            <h5>Follow us</h5>
                          </li>
                          <li>
                            <div className="footer_social_media">
                              <a
                                className="footer_social_media_link"
                                href="https://www.facebook.com/TOJOGlobal/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaFacebookF className="bx bxl-twitter footer_icon" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://x.com/TOJOGlobal"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaXTwitter className="bx bxl-twitter footer_icon" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://www.linkedin.com/company/tojo-global/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLinkedin className="bx footer_icon" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://t.me/TOJO_Global"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaTelegramPlane className="bx footer_icon" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://www.behance.net/TOJO_Global"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaBehance className="bx footer_icon" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="https://wa.me/8801333411624"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaSquareWhatsapp className="bx footer_icon" />
                              </a>
                              <a
                                className="footer_social_media_link"
                                href="http://www.instagram.com/tojoglobal"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaInstagram className="bx footer_icon" />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer horizonatal */}
        <div className="footer_horizontal"></div>
        {/* footer copy writing part  */}
        <div className="container">
          <div className="footer_menu_list_div">
            <div className="footer_menu_list_style">
              <ul>
                <li>
                  <div className="footer_privary_sales">
                    <li>
                      <Link to="/privacyPolicy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/home#faq">Sales and Refunds</Link>
                    </li>
                  </div>
                </li>
                <li>
                  <span>©️ {new Date().getFullYear()} TOJO Global</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
