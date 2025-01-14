import React from "react";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const ResponsiveMenu = () => {
  // mobile responsive menu bar
  // State to manage menu visibility
  const [responsiveNavMenuOpen, setResponsiveNavMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Toggle menu visibility
  const responsiveNavtoggleMenu = () => {
    setResponsiveNavMenuOpen(!responsiveNavMenuOpen);
  };

  // Toggle menu visibility
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Toggle menu visibility
  const toggleSubMenu = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  return (
    <>
      <IoMenu className="manu_icon" onClick={responsiveNavtoggleMenu} />
      <div className={responsiveNavMenuOpen ? "menu show" : "menu hide"}>
        <div className="navbar_cross_icon" onClick={responsiveNavtoggleMenu}>
          <RxCrossCircled />
        </div>
        <div id="responsive_navbar_nav">
          <nav className="responsive_navbar">
            <ul>
              {/* HOME */}
              <li>
                <span className="plus_minus_icon">
                  <FaPlus />
                  {/* <FaMinus /> */}
                </span>

                <NavLink onClick={responsiveNavtoggleMenu} to="/">
                  <span className="menu_name">Home</span>
                </NavLink>
              </li>
              {/* ABOUT US */}
              <li>
                <span className="plus_minus_icon">
                  <FaPlus />
                </span>

                <NavLink onClick={responsiveNavtoggleMenu} to="/about-us">
                  <span className="menu_name">ABOUT US</span>
                </NavLink>
              </li>
              {/* SERVICES */}
              <li>
                <span
                  className="plus_minus_icon"
                  onClick={() => toggleMenu("services")}
                >
                  {openMenu === "services" ? <FaMinus /> : <FaPlus />}
                </span>
                <div className="submenu_list_main_name">
                  <span
                    className="menu_name"
                    onClick={() => toggleMenu("services")}
                  >
                    SERVICES
                  </span>
                  <ul
                    className={`${
                      openMenu === "services" ? "submenu show" : "submenu hide"
                    }
               `}
                  >
                    {/*  Management submenu items  */}
                    <li>
                      <span
                        className="subMenu_plus_minus_icon"
                        onClick={() => toggleSubMenu("management")}
                      >
                        {openSubMenu === "management" ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </span>
                      <div className="submenu_list_main_name">
                        <span
                          className="menu_name"
                          onClick={() => toggleSubMenu("management")}
                        >
                          Management
                        </span>
                        <ul
                          className={`responsive_services_list
                        ${
                          openSubMenu === "management"
                            ? "subsubmenu show"
                            : "subsubmenu hide"
                        }
                      `}
                        >
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/mangement/community-management"
                              className="dropdown-item"
                            >
                              Community Management
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/mangement/social-media-management"
                              className="dropdown-item"
                            >
                              Social Media Management
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
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
                    <li>
                      <span
                        className="subMenu_plus_minus_icon"
                        onClick={() => toggleSubMenu("marketing")}
                      >
                        {openSubMenu === "marketing" ? <FaMinus /> : <FaPlus />}
                      </span>
                      <div className="submenu_list_main_name">
                        <span
                          className="menu_name"
                          onClick={() => toggleSubMenu("marketing")}
                        >
                          Marketing
                        </span>
                        <ul
                          className={
                            openSubMenu === "marketing"
                              ? "subsubmenu show"
                              : "subsubmenu hide"
                          }
                        >
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/marketing/on-page-seo"
                              className="dropdown-item"
                            >
                              SEO (On-Page)
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/marketing/socail-media-marketing"
                              className="dropdown-item"
                            >
                              Social Media Marketing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/marketing/search-engine-marketing"
                              className="dropdown-item"
                            >
                              Search Engine Marketing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/marketing/amazon-marketing"
                              className="dropdown-item"
                            >
                              Amazon Marketing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/marketing/content-marketing"
                              className="dropdown-item"
                            >
                              Content Marketing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/marketing/influencer-marketing"
                              className="dropdown-item"
                            >
                              Influencer Marketing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
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
                    <li>
                      <span
                        className="subMenu_plus_minus_icon"
                        onClick={() => toggleSubMenu("development")}
                      >
                        {openSubMenu === "development" ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </span>
                      <div className="submenu_list_main_name">
                        <span
                          className="menu_name"
                          onClick={() => toggleSubMenu("development")}
                        >
                          Development
                        </span>
                        <ul
                          className={
                            openSubMenu === "development"
                              ? "subsubmenu show"
                              : "subsubmenu hide"
                          }
                        >
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/development/blockchain-development"
                              className="dropdown-item"
                            >
                              Blockchain Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/development/app-development"
                              className="dropdown-item"
                            >
                              App Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
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
                    <li>
                      <span
                        className="subMenu_plus_minus_icon"
                        onClick={() => toggleSubMenu("design")}
                      >
                        {openSubMenu === "design" ? <FaMinus /> : <FaPlus />}
                      </span>
                      <div className="submenu_list_main_name">
                        <span
                          className="menu_name"
                          onClick={() => toggleSubMenu("design")}
                        >
                          Graphics & Visuals
                        </span>
                        <ul
                          className={
                            openSubMenu === "design"
                              ? "subsubmenu show"
                              : "subsubmenu hide"
                          }
                        >
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/design/logo-design"
                              className="dropdown-item"
                            >
                              Logo Design
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/design/social-media-design"
                              className="dropdown-item"
                            >
                              Social Media Design
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/design/ui-ux-design"
                              className="dropdown-item"
                            >
                              UI/UX design
                            </NavLink>
                          </li>
                          {/* <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/design/e-commerce-photo-editing"
                              className="dropdown-item"
                            >
                              Ecommerce Photo Editing
                            </NavLink>
                          </li> */}
                          {/* <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/design/white-paper-design"
                              className="dropdown-item"
                            >
                              White Paper Design
                            </NavLink>
                          </li> */}
                          {/* <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/design/web-design"
                              className="dropdown-item"
                            >
                              Web design
                            </NavLink>
                          </li> */}
                        </ul>
                      </div>
                    </li>
                    {/* Video editing submenu items*/}
                    <li>
                      <span
                        className="subMenu_plus_minus_icon"
                        onClick={() => toggleSubMenu("production")}
                      >
                        {openSubMenu === "production" ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </span>
                      <div className="submenu_list_main_name">
                        <span
                          className="menu_name"
                          onClick={() => toggleSubMenu("production")}
                        >
                          Video editing
                        </span>
                        <ul
                          className={
                            openSubMenu === "production"
                              ? "subsubmenu show"
                              : "subsubmenu hide"
                          }
                        >
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/videos/motion-graphics"
                              className="dropdown-item"
                            >
                              Motion Graphics
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/videos/video-editing"
                              className="dropdown-item"
                            >
                              VFX
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Content submenu items*/}
                    <li>
                      <span
                        className="subMenu_plus_minus_icon"
                        onClick={() => toggleSubMenu("content")}
                      >
                        {openSubMenu === "content" ? <FaMinus /> : <FaPlus />}
                      </span>
                      <div className="submenu_list_main_name">
                        <span
                          className="menu_name"
                          onClick={() => toggleSubMenu("content")}
                        >
                          Content
                        </span>
                        <ul
                          className={
                            openSubMenu === "content"
                              ? "subsubmenu show"
                              : "subsubmenu hide"
                          }
                        >
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/content/web-content-writing"
                              className="dropdown-item"
                            >
                              Web Content Writing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={responsiveNavtoggleMenu}
                              to="/services/content/white-paper-content"
                              className="dropdown-item"
                            >
                              White Paper Content
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* service Listing */}
                    {/* <li>
                      <span className="subMenu_plus_minus_icon">
                        <FaPlus />
                      </span>
                      <div className="submenu_list_main_name">
                        <NavLink
                          onClick={responsiveNavtoggleMenu}
                          to="/services/listing"
                          className="dropdown-item"
                        >
                          <span className="menu_name">Listing</span>
                        </NavLink>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </li>
              {/* CLIENTS */}
              <li>
                <span className="plus_minus_icon">
                  <FaPlus />
                </span>
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/listing"
                >
                  <span className="menu_name">Listing</span>
                </NavLink>
              </li>
              {/* CLIENTS */}
              <li>
                <span className="plus_minus_icon">
                  <FaPlus />
                </span>
                <NavLink onClick={responsiveNavtoggleMenu} to="/clients">
                  <span className="menu_name">CLIENTS</span>
                </NavLink>
              </li>

              {/* COMPANY */}
              <li>
                <span
                  className="plus_minus_icon"
                  onClick={() => toggleMenu("company")}
                >
                  {openMenu === "company" ? <FaMinus /> : <FaPlus />}
                </span>
                <div className="submenu_list_main_name">
                  <span className="menu_name">COMPANY</span>
                  <ul
                    className={
                      openMenu === "company" ? "submenu show" : "submenu hide"
                    }
                  >
                    <li>
                      <NavLink
                        to="/about-us"
                        className="dropdown-item submenu_servces_name"
                        onClick={responsiveNavtoggleMenu}
                      >
                        <span>About</span>
                      </NavLink>
                    </li>

                    {/* <li>
                            <NavLink
                              to="/team"
                              className="dropdown-item"
                              onClick={handleClick}
                            >
                              Team
                            </NavLink>
                          </li> */}

                    <li>
                      <NavLink
                        to="/packages"
                        className="dropdown-item submenu_servces_name"
                        onClick={responsiveNavtoggleMenu}
                      >
                        <span>Packages</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="dropdown-item submenu_servces_name"
                        onClick={responsiveNavtoggleMenu}
                      >
                        <span>Contact</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              {/* PACKAGES */}
              <li>
                <span className="plus_minus_icon">
                  <FaPlus />
                  {/* <FaMinus /> */}
                </span>

                <NavLink onClick={responsiveNavtoggleMenu} to="/packages">
                  <span className="menu_name">PACKAGES</span>
                </NavLink>
              </li>
              {/* BLOG */}
              <li>
                <span className="plus_minus_icon">
                  <FaPlus />
                  {/* <FaMinus /> */}
                </span>

                <NavLink onClick={responsiveNavtoggleMenu} to="/blog">
                  <span className="menu_name">BLOG</span>
                </NavLink>
              </li>
              {/* portfolio btn */}
              <li>
                <a
                  className="footer_social_media_link"
                  href="https://www.behance.net/TOJO_Global"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="responsive_navbar_btn responsive_navbar_btn_portfolio"
                  >
                    <span> PORTFOLIO</span>
                  </button>
                </a>
              </li>
              {/* call now btn */}
              <li>
                <Link to="/contact">
                  <button type="button" className="responsive_navbar_btn">
                    <span>
                      {" "}
                      <LuPhoneCall className="me-1" /> BOOK A INTRO CALL
                    </span>
                  </button>
                </Link>
              </li>
              {/* socila link */}
              <li>
                <div className="resonsive_navbar_social_media">
                  <a
                    className="resonsive_navbar_social_media_link"
                    href="https://www.facebook.com/TOJOGlobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="bx bxl-twitter footer_icon" />
                  </a>
                  <a
                    className="resonsive_navbar_social_media_link"
                    href="https://x.com/TOJOGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="bx bxl-twitter footer_icon" />
                  </a>
                  <a
                    className="resonsive_navbar_social_media_link"
                    href="https://www.linkedin.com/company/tojo-global/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="bx footer_icon" />
                  </a>
                  <a
                    className="resonsive_navbar_social_media_link"
                    href="https://t.me/TOJO_Global"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane className="bx footer_icon" />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
