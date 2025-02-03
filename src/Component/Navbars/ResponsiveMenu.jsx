import React, { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
  FaMinus,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const ResponsiveMenu = () => {
  const [responsiveNavMenuOpen, setResponsiveNavMenuOpen] = useState(false);
  const [menuState, setMenuState] = useState("main");

  // Toggle menu visibility
  const responsiveNavtoggleMenu = () => {
    setResponsiveNavMenuOpen((prev) => !prev);
    setMenuState("main");
  };

  const footerMenuBar = () => {
    return (
      <>
        {/* portfolio btn */}
        <li className="menu_footer_ltems">
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
        <li className="menu_footer_ltems">
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
        <li className="menu_footer_ltems">
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
      </>
    );
  };

  return (
    <>
      <IoMenu className="menu_icon" onClick={responsiveNavtoggleMenu} />
      <div className={`menu ${responsiveNavMenuOpen ? "show" : "hide"}`}>
        <div className="navbar_cross_icon" onClick={responsiveNavtoggleMenu}>
          <RxCrossCircled className="close-icon" />
        </div>
        {/* Main Menu */}
        <div
          className={`submenu-container ${
            menuState === "main" ? "menu-main" : "menu-back"
          }`}
        >
          <nav className="responsive_navbar">
            <ul>
              {/* home  */}
              <li className="menu_ltems">
                <NavLink onClick={responsiveNavtoggleMenu} to="/">
                  <span className="menu_name">Home</span>
                </NavLink>
              </li>
              {/* About us */}
              <li className="menu_ltems">
                <NavLink onClick={responsiveNavtoggleMenu} to="/about-us">
                  <span className="menu_name">ABOUT US</span>
                </NavLink>
              </li>
              {/* services */}
              <li
                className="menu_ltems"
                onClick={() => setMenuState("services")}
              >
                <span className="menu_name">SERVICES</span>
                <span className="menu_name">
                  <FaAngleRight className="menu-arrow" />
                </span>
              </li>
              {/* Listing */}
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/listing"
                >
                  <span className="menu_name">Listing</span>
                </NavLink>
              </li>
              {/*CLIENTS */}
              <li className="menu_ltems">
                <NavLink onClick={responsiveNavtoggleMenu} to="/clients">
                  <span className="menu_name">CLIENTS</span>
                </NavLink>
              </li>
              {/* COMPANY */}
              <li
                className="menu_ltems"
                onClick={() => setMenuState("company")}
              >
                <span className="menu_name">COMPANY</span>
                <span className="menu_name">
                  <FaAngleRight className="menu-arrow" />
                </span>
              </li>
              {/*PACKAGES */}
              <li className="menu_ltems">
                <NavLink onClick={responsiveNavtoggleMenu} to="/packages">
                  <span className="menu_name">PACKAGES</span>
                </NavLink>
              </li>
              {/*Blog */}
              <li className="menu_ltems">
                <NavLink onClick={responsiveNavtoggleMenu} to="/blog">
                  <span className="menu_name">BLOG</span>
                </NavLink>
              </li>
              {/* footer menu */}
              {footerMenuBar()}
            </ul>
          </nav>
        </div>

        {/* Services Menu */}
        <div
          className={`submenu-container ${
            menuState === "services" ? "menu-main" : "menu-services"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("main")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li
                className="menu_ltems"
                onClick={() => setMenuState("management")}
              >
                <span className="menu_name">Management</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              <li
                className="menu_ltems"
                onClick={() => setMenuState("marketing")}
              >
                <span className="menu_name">Marketing</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              <li
                className="menu_ltems"
                onClick={() => setMenuState("development")}
              >
                <span className="menu_name">Development</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              <li className="menu_ltems" onClick={() => setMenuState("design")}>
                <span className="menu_name">Graphics & Visuals</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              <li
                className="menu_ltems"
                onClick={() => setMenuState("production")}
              >
                <span className="menu_name">Video editing</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              <li
                className="menu_ltems"
                onClick={() => setMenuState("content")}
              >
                <span className="menu_name">Content</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              <li
                className="menu_ltems"
                onClick={() => setMenuState("production")}
              >
                <span className="menu_name">Video editing</span>
                <span className="menu_name">
                  <FaAngleRight />
                </span>
              </li>
              {/* footer menu */}
              {footerMenuBar()}
            </ul>
          </nav>
        </div>

        {/* Management Submenu */}
        <div
          className={`submenu-container ${
            menuState === "management" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/mangement/community-management"
                  className="menu_name"
                >
                  Community Management
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/mangement/social-media-management"
                  className="menu_name"
                >
                  Social Media Management
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/mangement/social-media-moderation"
                  className="menu_name"
                >
                  Social Media Moderation
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Marketing Submenu */}
        <div
          className={`submenu-container ${
            menuState === "marketing" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/on-page-seo"
                  className="menu_name"
                >
                  SEO (On-Page)
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/socail-media-marketing"
                  className="menu_name"
                >
                  Social Media Marketing
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/search-engine-marketing"
                  className="menu_name"
                >
                  Search Engine Marketing
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/amazon-marketing"
                  className="menu_name"
                >
                  Amazon Marketing
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/content-marketing"
                  className="menu_name"
                >
                  Content Marketing
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/influencer-marketing"
                  className="menu_name"
                >
                  Influencer Marketing
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/marketing/lead-genaration"
                  className="menu_name"
                >
                  Lead Generation
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Development Submenu */}
        <div
          className={`submenu-container ${
            menuState === "development" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/development/blockchain-development"
                  className="menu_name"
                >
                  Blockchain Development
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/development/app-development"
                  className="menu_name"
                >
                  App Development
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/development/wordpress-development"
                  className="menu_name"
                >
                  Wordpress Development
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Design Submenu */}
        <div
          className={`submenu-container ${
            menuState === "design" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/design/logo-design"
                  className="menu_name"
                >
                  Logo Design
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/design/social-media-design"
                  className="menu_name"
                >
                  Social Media Design
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/design/ui-ux-design"
                  className="menu_name"
                >
                  UI/UX design
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Production Submenu */}
        <div
          className={`submenu-container ${
            menuState === "production" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/videos/motion-graphics"
                  className="menu_name"
                >
                  Motion Graphics
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/videos/video-editing"
                  className="menu_name"
                >
                  VFX
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Content Submenu */}
        <div
          className={`submenu-container ${
            menuState === "content" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/content/web-content-writing"
                  className="menu_name"
                >
                  Web Content Writing
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/services/content/white-paper-content"
                  className="menu_name"
                >
                  White Paper Content
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* Company Submenu */}
        <div
          className={`submenu-container ${
            menuState === "company" ? "menu-main" : "menu-management"
          }`}
        >
          <div className="submenu_header">
            <FaAngleLeft
              className="back-btn"
              onClick={() => setMenuState("services")}
            />
            <span className="menuStateText">{menuState}</span>
          </div>
          <nav className="responsive_navbar">
            <ul>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/about-us"
                  className="menu_name"
                >
                  About
                </NavLink>
              </li>

              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/packages"
                  className="menu_name"
                >
                  Packages
                </NavLink>
              </li>
              <li className="menu_ltems">
                <NavLink
                  onClick={responsiveNavtoggleMenu}
                  to="/contact"
                  className="menu_name"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
