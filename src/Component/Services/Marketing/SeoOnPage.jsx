import { Link } from "react-router-dom";
import "../../../Style/ServicesPageStyle/MarketingStyle/SeoOnPageStyle.css";
import ServiceContactUs from "../ContactUsServiceSection/ServiceContactUs";
import { useEffect, useContext } from "react";
import { AppContext } from "../../../AppContext";
const SeoOnPage = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);

  // Scroll to the top when the component mounts
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main className="maindiv">
      {/* service management top part  */}
      <section className="communityManagement_top_part">
        <div
          className="OnePageSeo_hero_part"
          style={{
            ...(isMobileView && {
              paddingTop: "6rem",
            }),
          }}
        >
          <div className="OnePageSeo_hero_part_div container">
            <div
              className="communityManagement_hero_text_div"
              data-aos="fade-left"
            >
              {/* <h1>
                Enhance your online presence with TOJO GLOBAL’s expert{" "}
                <span className="headdingGradientText">SEO </span> service.
              </h1> */}

              <div className="hero_page_strongText">
                <h2>
                  {" "}
                  Enhance your{" "}
                  <span className="headdingGradientText"> Online </span>
                </h2>
                <h3 className="homePageHeroSubHeadingFristText">
                  presence with TOJO GLOBAL’s
                </h3>
                <h3 className="homePageHeroSubHeadingSecondText">
                  expert SEO service
                </h3>
              </div>
              <p
                style={{
                  ...(isMobileView && {
                    textAlign: "justify",
                    wordSpacing: "-1px",
                  }),
                }}
              >
                Our expert team elevates your search engine rankings and
                connects you with your target audience using powerful marketing
                tools and intelligent SEO strategies
              </p>
              <div className="hero_btn_style">
                <Link to="/contact">
                  <button className="custombtn hero_btn2 fristBtn">
                    <span>Lets Make a Call</span>
                  </button>
                </Link>
                <Link to="/packages">
                  <button className="custombtn hero_btn1 secondBtn">
                    <span>Check Packages</span>
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="OnePageSeo_hero_part_image_div"
              data-aos="fade-right"
              style={isMobileView ? { display: "none" } : { display: "block" }}
            >
              <img
                src="/Images/ServicesImage/banner_images/SEO_onpage.png"
                alt="OnePageSeo_hero_part_image_div.png"
              />
            </div>
          </div>
        </div>
        <div className="OnePageSeo_second_part">
          <div>
            <h1
              className="OnePageSeo_second_part_heading"
              data-aos="fade-down"
              style={{
                ...(isMobileView && {
                  marginBottom: "5rem",
                }),
              }}
            >
              Services We Cover
            </h1>
            <div className="OnePageSeo_second_part_Card">
              {/* card 01 */}
              <div
                className="OnePageSeo_second_part_Card_div"
                data-aos="fade-right"
                style={{
                  ...(isMobileView && {
                    paddingTop: "4rem",
                    height: "18rem",
                  }),
                }}
              >
                <div className="OnePageSeo_second_part_Card_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                  >
                    <path
                      d="M30.8709 47.4159C31.575 49.6076 32.2507 51.7255 32.9377 53.8547C33.6645 53.8547 34.3515 53.849 35.0386 53.8547C35.6291 53.8604 36.0038 54.1897 36.0095 54.6837C36.0152 55.1777 35.6575 55.5184 35.0613 55.5411C34.5048 55.5581 33.9484 55.5411 33.3976 55.5411C27.3449 55.5411 21.2922 55.5411 15.2395 55.5411C15.0464 55.5411 14.8534 55.5524 14.666 55.524C14.1834 55.4616 13.9052 55.172 13.8825 54.6837C13.8598 54.2295 14.2231 53.8661 14.7285 53.8547C15.4553 53.832 16.182 53.8547 16.9542 53.8547C17.6356 51.7255 18.317 49.6019 19.004 47.4784C18.7882 47.3591 18.5781 47.4159 18.3737 47.4159C14.507 47.4159 10.6347 47.4159 6.76797 47.4159C3.65077 47.4159 1.47611 45.281 1.47043 42.1638C1.45908 32.8519 1.45908 23.5457 1.47043 14.2339C1.47043 11.1507 3.5656 9.04989 6.64306 8.97608C7.06323 8.96473 7.4834 8.97608 7.97738 8.97608C7.97738 7.87456 7.97738 6.79006 7.97738 5.70557C7.97738 5.22295 8.00577 4.746 8.16475 4.29176C8.70416 2.76439 9.77162 1.86727 11.3842 1.64015C11.6283 1.60608 11.8781 1.59473 12.128 1.59473C20.6733 1.59473 29.213 1.59473 37.7583 1.59473C39.7002 1.59473 41.1083 2.53159 41.6988 4.16684C41.8805 4.66083 41.9146 5.17184 41.9146 5.68854C41.9146 6.756 41.9146 7.82913 41.9146 8.99312C42.5051 8.99312 43.0559 8.96473 43.6009 8.99312C46.3661 9.14642 48.4102 11.2643 48.4215 14.0579C48.4442 18.8103 48.4329 23.5571 48.4215 28.3096C48.4215 28.7581 48.5521 29.0136 48.9326 29.2691C53.9405 32.6191 55.2862 39.4668 51.9476 44.4747C51.8397 44.6337 51.7431 44.7927 51.6239 44.9744C52.6516 46.4506 53.6907 47.9212 54.7014 49.4032C55.6382 50.7829 55.6326 52.509 54.7298 53.8263C53.174 56.0918 49.8467 56.0975 48.308 53.8036C47.3938 52.4409 46.5478 51.0271 45.7131 49.6076C45.469 49.1874 45.2135 49.0966 44.7592 49.1647C42.6641 49.494 40.603 49.4146 38.6157 48.5742C38.2296 48.4095 37.8151 48.2676 37.4915 48.0121C36.7817 47.4557 35.9925 47.3648 35.1294 47.3932C33.7497 47.4329 32.3756 47.4046 30.8823 47.4046L30.8709 47.4159ZM9.66374 38.2914H31.751C31.8135 36.8549 32.0633 35.4865 32.6141 34.1862C32.6992 33.9818 32.6822 33.7718 32.6822 33.5674C32.6822 30.9441 32.6822 28.3209 32.6822 25.692C32.6822 24.6643 33.1137 24.2385 34.1585 24.2328C34.732 24.2328 35.3054 24.2328 35.8846 24.2328C37.0202 24.2328 37.412 24.6246 37.412 25.7431C37.412 26.7254 37.412 27.7077 37.412 28.7638C38.2126 28.4061 38.9053 28.0313 39.6661 27.8667C40.1147 27.7701 40.2566 27.5828 40.2566 27.1001C40.2339 20.014 40.2453 12.9279 40.2396 5.83617C40.2396 4.1271 39.4049 3.28676 37.7129 3.28676C29.247 3.28676 20.7812 3.30947 12.3153 3.26405C10.788 3.25837 9.63535 4.07032 9.64102 5.91566C9.68645 16.488 9.66374 27.0604 9.66374 37.6385C9.66374 37.8429 9.66374 38.0529 9.66374 38.2857V38.2914ZM7.93196 38.3312V10.6568C7.51179 10.6568 7.13136 10.6568 6.75094 10.6568C4.5706 10.6568 3.15111 12.0706 3.15111 14.2396C3.15111 22.1092 3.15111 29.9732 3.15111 37.8429C3.15111 38.0075 3.08297 38.1892 3.21924 38.3312H7.93763H7.93196ZM42.789 47.7055C47.9276 47.7112 52.0952 43.5549 52.1009 38.405C52.1065 33.2607 47.9219 29.0704 42.7549 29.0477C37.6618 29.025 33.4431 33.2835 33.4487 38.439C33.4487 43.5719 37.6107 47.6998 42.7947 47.7055H42.789ZM46.7068 28.1108C46.7068 23.2618 46.7295 18.4753 46.6954 13.6888C46.6841 12.3261 45.5258 11.0656 44.1801 10.759C43.4476 10.5943 42.7038 10.6511 41.9714 10.6738C41.8805 11.2813 41.8862 26.9298 41.9827 27.4295C43.5782 27.3102 45.134 27.5317 46.7125 28.1051L46.7068 28.1108ZM47.0134 48.5742C47.9162 50.0334 48.7565 51.4416 49.6423 52.8213C50.3123 53.8661 51.5671 54.15 52.6062 53.5538C53.6282 52.9576 54.0825 51.6914 53.4636 50.6864C52.5381 49.1818 51.4876 47.7566 50.477 46.2803C49.9319 46.78 49.4152 47.2058 48.8587 47.5806C48.2909 47.961 47.6777 48.2619 47.0077 48.5799L47.0134 48.5742ZM26.2718 42.8906C26.2831 42.1354 25.7097 41.5449 24.9545 41.5392C24.205 41.5335 23.6088 42.124 23.6088 42.8679C23.6088 43.5776 24.1937 44.1795 24.9034 44.2022C25.6472 44.2249 26.2604 43.6344 26.2718 42.8906Z"
                      fill="white"
                    />
                    <path
                      d="M11.6397 12.53C11.651 9.21404 14.3821 6.49429 17.681 6.52268C20.997 6.55107 23.7167 9.29921 23.6883 12.5811C23.6599 15.9084 20.9515 18.5827 17.6299 18.577C14.3083 18.5656 11.6283 15.8629 11.6397 12.53ZM19.6399 16.4307C18.7258 15.3519 17.8911 14.3299 17.0224 13.3362C16.7215 12.9956 16.6022 12.6379 16.6079 12.1893C16.6249 10.9288 16.6136 9.66828 16.6136 8.33963C14.9613 8.83361 13.8882 9.83294 13.4793 11.4398C13.0251 13.217 13.5134 14.7557 14.9386 15.914C16.341 17.0553 17.9195 17.1518 19.6399 16.4251V16.4307Z"
                      fill="white"
                    />
                    <path
                      d="M24.3412 28.2985C24.3412 30.0587 24.3412 31.8188 24.3412 33.579C24.3412 34.6635 23.9381 35.0553 22.8479 35.061C22.2177 35.061 21.5874 35.0723 20.9515 35.061C20.0487 35.0439 19.6058 34.6067 19.6058 33.7153C19.6001 30.0984 19.6001 26.4816 19.6058 22.8704C19.6058 22.0016 20.0544 21.5588 20.9061 21.5417C21.6158 21.5304 22.3199 21.5304 23.0296 21.5417C23.904 21.5588 24.3299 21.9732 24.3356 22.8533C24.3469 24.6703 24.3356 26.4872 24.3356 28.3042L24.3412 28.2985Z"
                      fill="white"
                    />
                    <path
                      d="M17.8065 31.2623C17.8065 32.0686 17.8179 32.8692 17.8065 33.6754C17.7952 34.618 17.375 35.0438 16.4381 35.0608C15.7681 35.0722 15.0981 35.0722 14.4281 35.0608C13.5197 35.0438 13.0711 34.618 13.0654 33.7209C13.0541 32.0572 13.0484 30.3879 13.0654 28.7242C13.0711 27.8498 13.5197 27.4183 14.377 27.407C15.0868 27.3956 15.7965 27.3956 16.5006 27.407C17.3353 27.4183 17.7781 27.8385 17.8009 28.6788C17.8236 29.5419 17.8009 30.3992 17.8009 31.2623H17.8065Z"
                      fill="white"
                    />
                    <path
                      d="M30.8714 31.9549C30.8714 32.5851 30.8885 33.2154 30.8714 33.8456C30.8487 34.5895 30.4399 35.0153 29.6904 35.0437C28.9069 35.0721 28.1233 35.0721 27.3397 35.0437C26.5846 35.0153 26.1474 34.5554 26.1417 33.7945C26.1246 32.5511 26.1246 31.3133 26.1417 30.0698C26.153 29.2919 26.6186 28.815 27.3908 28.7979C28.1346 28.7809 28.8785 28.7809 29.628 28.7979C30.4115 28.815 30.8487 29.2635 30.8771 30.0584C30.8771 30.0982 30.8771 30.1323 30.8771 30.172C30.8771 30.7625 30.8771 31.3587 30.8771 31.9492L30.8714 31.9549Z"
                      fill="white"
                    />
                    <path
                      d="M32.0754 13.4045C30.8887 13.4045 29.702 13.4045 28.5153 13.4045C27.834 13.4045 27.4592 13.0922 27.4649 12.5471C27.4763 12.0247 27.834 11.7181 28.4926 11.7181C30.866 11.7124 33.2394 11.7124 35.6128 11.7181C36.2828 11.7181 36.6859 12.0645 36.6746 12.5812C36.6632 13.1036 36.2714 13.4045 35.5787 13.4045C34.4091 13.4045 33.2451 13.4045 32.0754 13.4045Z"
                      fill="white"
                    />
                    <path
                      d="M32.1089 15.9375C33.2785 15.9375 34.4425 15.9375 35.6122 15.9375C36.2822 15.9375 36.6853 16.2725 36.674 16.8006C36.6626 17.3002 36.2651 17.6295 35.6349 17.6295C33.2615 17.6295 30.8881 17.6295 28.5147 17.6295C27.8334 17.6295 27.4586 17.3059 27.47 16.7608C27.4813 16.2384 27.8447 15.9375 28.4977 15.9375C29.7014 15.9375 30.9108 15.9375 32.1146 15.9375H32.1089Z"
                      fill="white"
                    />
                    <path
                      d="M32.0186 9.17474C30.8319 9.17474 29.6452 9.18042 28.4586 9.17474C27.8169 9.17474 27.4592 8.85677 27.4649 8.32304C27.4706 7.81203 27.8113 7.51109 28.4302 7.51109C30.8433 7.50542 33.2508 7.50542 35.6639 7.51109C36.2941 7.51109 36.6802 7.85177 36.6689 8.35711C36.6575 8.86245 36.2714 9.16906 35.6298 9.17474C34.4261 9.18042 33.2167 9.17474 32.013 9.17474H32.0186Z"
                      fill="white"
                    />
                    <path
                      d="M50.1654 38.3992C50.1256 43.0949 46.4747 45.7692 42.8465 45.7976C38.7129 45.8316 35.3629 42.4816 35.3799 38.3878C35.397 34.3565 38.7243 31.0008 42.7045 30.9951C46.8608 30.9951 50.171 34.277 50.171 38.3992H50.1654ZM41.8812 38.7569C41.7109 38.5355 41.5973 38.3765 41.4724 38.2345C41.3475 38.0926 41.2112 37.9563 41.0693 37.8314C40.6605 37.4623 40.1835 37.4339 39.8371 37.7633C39.4738 38.1096 39.4794 38.6036 39.8826 39.0294C40.2914 39.461 40.7116 39.8755 41.1374 40.2899C41.7109 40.8577 42.1197 40.8577 42.6988 40.2843C43.6584 39.3247 44.618 38.3651 45.5719 37.3999C46.0716 36.8945 46.117 36.446 45.7309 36.0542C45.3561 35.6794 44.8792 35.7305 44.3909 36.2188C43.5789 37.0308 42.7783 37.8484 41.8812 38.7626V38.7569Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3>On-Page SEO</h3>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                      marginTop: "19px",
                    }),
                  }}
                >
                  We optimize every element of your website to improve its
                  visibility on search engines. This includes making your
                  content to ensure it is relevant and engaging, updating meta
                  tags for better indexing, and enhancing the overall structure
                  of your site for a smoother user experience. Our goal is to
                  make your website not only attractive to search engines but
                  also user-friendly, helping visitors find what they need
                  quickly and easily.
                </p>
              </div>
              {/* card 02 */}
              <div
                className="OnePageSeo_second_part_Card_div"
                data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
                style={{
                  ...(isMobileView && {
                    paddingTop: "4rem",
                    height: "18rem",
                  }),
                }}
              >
                <div className="OnePageSeo_second_part_Card_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="57"
                    viewBox="0 0 56 57"
                    fill="none"
                  >
                    <path
                      d="M5.17969 36.9404H50.9378C50.9378 37.1108 50.9378 37.2641 50.9378 37.4117C50.9378 41.5736 50.9378 45.7356 50.9378 49.8975C50.9378 51.2091 50.3226 51.8451 49.0417 51.8451C35.0531 51.8451 21.0644 51.8451 7.07579 51.8451C5.82291 51.8451 5.18528 51.2035 5.18528 49.943C5.18528 45.6277 5.18528 41.3068 5.18528 36.9404H5.17969Z"
                      fill="white"
                    />
                    <path
                      d="M20.2871 35.2312C21.1652 33.0111 22.021 30.8251 22.8935 28.6221C23.0725 28.6221 23.2403 28.6221 23.4137 28.6221C31.9378 28.6221 40.4563 28.6221 48.9803 28.6221C50.3339 28.6221 50.938 29.2353 50.938 30.6094C50.938 32.1424 50.938 33.6755 50.938 35.2312H20.2871Z"
                      fill="white"
                    />
                    <path
                      d="M25.9922 21.5069C26.3278 21.9781 26.6522 22.2564 27.2674 22.0292C27.6925 21.8759 28.1456 22.0974 28.4756 22.4267C29.7676 23.727 31.054 25.0329 32.3349 26.3445C32.4859 26.4978 32.6369 26.6681 32.6593 26.9577H30.7744C29.4656 26.9577 28.1511 26.9577 26.8423 26.9577C26.7081 26.9577 26.5123 27.0031 26.4452 26.935C25.8244 26.2991 24.9854 25.8221 24.8064 24.8342C24.784 24.7149 24.7617 24.573 24.8064 24.4764C25.114 23.8632 24.7505 23.5282 24.2974 23.1932C21.8308 25.0442 19.0734 25.737 16.0418 25.0386C13.6256 24.4821 11.6847 23.1478 10.2473 21.0981C7.37793 16.9986 7.95963 11.4739 11.612 8.02169C15.1525 4.67169 20.6339 4.51271 24.454 7.65263C28.1903 10.7244 29.5215 16.7147 25.9866 21.5069H25.9922ZM10.0851 15.3179C10.0739 19.9 13.7206 23.6361 18.2176 23.6475C22.7313 23.6588 26.4117 19.9568 26.4228 15.3917C26.434 10.8096 22.7873 7.07347 18.2903 7.06212C13.771 7.05076 10.0962 10.7471 10.0851 15.3179Z"
                      fill="white"
                    />
                    <path
                      d="M28.6384 20.2865C29.3487 18.5661 29.7738 16.7889 29.6732 14.9038C29.662 14.6994 29.7626 14.5915 29.8857 14.4666C31.0659 13.2742 32.2348 12.0648 33.4262 10.8781C34.1142 10.1911 35.0594 10.1911 35.753 10.8781C36.4465 11.5651 37.1177 12.2749 37.7554 12.9279C39.204 11.4629 40.6247 10.0151 42.0957 8.52176C42.0901 8.49905 41.9279 8.48201 41.8272 8.4082C41.2567 7.98803 41.005 7.28964 41.1952 6.631C41.4021 5.9099 41.9838 5.42159 42.7277 5.41024C43.8352 5.3932 44.9371 5.3932 46.0445 5.41024C46.9618 5.42159 47.6498 6.12566 47.6665 7.05685C47.6833 8.12998 47.6777 9.19744 47.6665 10.2706C47.6665 11.1393 47.2191 11.7582 46.4584 11.9796C45.7369 12.1897 45.0601 11.8831 44.6015 11.1507C44.5735 11.1109 44.5455 11.0712 44.512 11.0201C44.3274 11.0655 44.2435 11.2245 44.126 11.3437C42.5711 12.9165 40.9826 14.4552 39.4837 16.0791C38.4042 17.2431 37.3694 17.3851 36.2284 16.0564C35.7306 15.4773 35.1601 14.9549 34.5952 14.3814C33.7003 15.2899 32.8445 16.1757 31.972 17.0387C30.8701 18.1346 29.8298 19.2985 28.6664 20.3319C28.6552 20.3206 28.644 20.3035 28.6328 20.2922L28.6384 20.2865Z"
                      fill="white"
                    />
                    <path
                      d="M5.18041 35.2597C5.18041 33.5393 5.16922 31.8813 5.186 30.229C5.19719 29.3717 5.86278 28.6449 6.69617 28.6392C10.3989 28.6165 14.1016 28.6278 17.8602 28.6278C17.2282 30.2461 16.613 31.8245 15.9865 33.3973C15.7404 34.0162 15.6286 34.8509 15.1755 35.1745C14.7336 35.4811 13.9282 35.2597 13.285 35.2597C10.768 35.2597 8.25109 35.2597 5.73414 35.2597C5.56634 35.2597 5.39855 35.2597 5.18041 35.2597ZM8.44685 33.5961C9.33058 33.5961 10.0689 32.8579 10.0801 31.9665C10.0913 31.0467 9.35296 30.2801 8.44685 30.2801C7.54075 30.2801 6.80245 31.0353 6.81363 31.9608C6.82482 32.8522 7.56312 33.5961 8.44685 33.5961ZM14.9853 31.9438C14.9853 31.0467 14.2582 30.2972 13.3801 30.2858C12.4684 30.2744 11.7245 31.0183 11.7189 31.9438C11.7189 32.8409 12.446 33.5904 13.3241 33.6017C14.2302 33.6131 14.9853 32.8636 14.9853 31.9438Z"
                      fill="white"
                    />
                    <path
                      d="M19.6165 28.6387H21.1266C20.2541 30.8588 19.3927 33.0505 18.5258 35.2478H17.0156C17.8882 33.0277 18.7495 30.836 19.6165 28.6387Z"
                      fill="white"
                    />
                    <path
                      d="M28.6715 20.3316C28.6491 20.3599 28.6324 20.394 28.61 20.4224C28.5988 20.411 28.582 20.394 28.582 20.3883C28.5988 20.3543 28.6212 20.3202 28.638 20.2861C28.6491 20.2975 28.6603 20.3145 28.6715 20.3259V20.3316Z"
                      fill="white"
                    />
                    <path
                      d="M18.2458 8.7207C21.8366 8.7207 24.7787 11.6903 24.7898 15.3242C24.801 18.9921 21.8646 21.9901 18.257 21.9901C14.6493 21.9901 11.7073 18.9978 11.7129 15.3355C11.7185 11.7016 14.6605 8.72638 18.2458 8.7207Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3>Off-Page SEO</h3>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      lineHeight: "120%",
                      marginTop: "19px",
                    }),
                  }}
                >
                  We focus on building your online reputation through targeted
                  strategies beyond your website. This includes engaging with
                  audiences on social media platforms, forming partnerships with
                  influencers, and securing backlinks from reputable sites. By
                  increasing your brand's visibility and credibility, we drive
                  more traffic to your website, helping you reach a wider
                  audience and establish a strong presence in your industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container">
        <h1
          className="smModaration_service_offers_heading"
          data-aos="fade-down"
        >
          Industries We Serve
        </h1>
        {/*01 SEO Analysis */}
        <div className="smIndustries_services_card_div">
          <div
            className="smIndustries_services_Text_card_div Small_Businesses_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>SEO Analysis </h4>
            <p
              style={{
                ...(isMobileView && {
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We perform a detailed analysis of your current SEO standing to
              identify strengths and areas for improvement
            </p>
          </div>
          {/*02 Keyword Research */}
          <div
            className="smIndustries_services_Text_card_div Small_Businesses_div "
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Small Business (1).png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Keyword Research</h4>
            <p>
              We perform a detailed analysis of your current SEO standing to
              identify strengths and areas for improvement
            </p>
          </div>
          {/*03 Link Building */}
          <div
            className="smIndustries_services_Text_card_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Link Building</h4>
            <p>
              We research essential keywords to discover what your potential
              customers are searching for
            </p>
          </div>
          {/*04 SEO Monitoring */}
          <div
            className="smIndustries_services_Text_card_div Small_Businesses_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>SEO Monitoring</h4>
            <p>
              We create high-quality backlinks to improve your rankings in
              Google and Bing search results
            </p>
          </div>
          {/* 05 Local SEO */}
          <div
            className="smIndustries_services_Text_card_div Small_Businesses_div "
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Small Business (1).png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>Local SEO</h4>
            <p>
              We track your SEO progress and make continuous improvements to
              ensure long-term success
            </p>
          </div>
          <div
            className="smIndustries_services_Text_card_div"
            data-aos="fade-down"
            data-aos-delay={6 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4>SEO Audit</h4>
            <p>
              We run a technical audit to find and fix any issues on your
              website that may be hurting your rankings
            </p>
          </div>
        </div>
      </section>
      {/* Connect with Tojo Global for Innovative SEO Strategies That Expand Your Brand */}
      <section className="InnovativeSEOStrategies_hero_part">
        <div className="InnovativeSEOStrategies_text_part">
          <h1 data-aos="fade-up" data-aos-delay={1 * 200}>
            Connect with Tojo Global for Innovative{" "}
            <span className="headdingGradientText">SEO</span> Strategies That
            Expand Your Brand
          </h1>
          <p data-aos="fade-up" data-aos-delay={2 * 200}>
            Search engine optimization is no longer just about adding keywords
            and hoping for the best. It’s a dynamic field that requires a deep
            understanding of how search engines work and what your customers
            need. With Tojo Global, SEO becomes straightforward and effective.
            We pride ourselves on innovation, using creative strategies to
            position your content in front of your target audience. Our approach
            starts with a deep dive into your business, goals, and customers. By
            knowing your audience, we craft SEO strategies that drive
            engagement. Our ongoing maintenance ensures your site continues to
            perform at its best, making Tojo Global your trusted partner for
            long-term success
          </p>
        </div>
      </section>
      {/* Our specialities */}
      <section className="smBrandGrowth_hero_part">
        <div className="seoSpecialities_text_div" data-aos="fade-down">
          <h1 className="pb-lg-4">Our specialities</h1>
          <h4>Industry-Specific SEO</h4>
          <p>
            At Tojo Global, we provide tailored SEO services designed to meet
            the unique needs of various competitive industries. Our approach
            ensures that businesses in specific sectors receive strategies that
            resonate with their target audience. Here are some of the industries
            we specialize in:
          </p>
        </div>

        {/* Crypto SEO */}
        <div className="smIndustries_services_card_div">
          <div className="smIndustries_Small_leftOutline"></div>
          <div className="smIndustries_Small_rightOutline"></div>
          <div className="smIndustries_Small_centerOutline"></div>
          {/*01 Crypto SEO */}
          <div
            className="smIndustries_services_Text_card_div  seoSpecialities_text_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-right"}
            data-aos-delay={1 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4 className="mx-auto">Crypto SEO </h4>
            <p>
              We optimize your website to attract crypto enthusiasts and
              investors, focusing on high-value keywords and content that drives
              engagement in the fast-paced crypto market.
            </p>
          </div>
          {/* 02 Fintech SEO */}
          <div
            className="smIndustries_services_Text_card_div  seoSpecialities_text_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-right"}
            data-aos-delay={2 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Small Business (1).png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4 className="mx-auto">Fintech SEO</h4>
            <p>
              our SEO service enhances your online presence in the financial
              technology sector, targeting keywords that cater to consumers
              seeking innovative financial solutions and services
            </p>
          </div>
          {/*03 B2B SEO */}
          <div
            className="smIndustries_services_Text_card_div seoSpecialities_text_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-right"}
            data-aos-delay={3 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4 className="mx-auto">B2B SEO</h4>
            <p>
              Our SEO expert team creates strategies that connect you with other
              businesses, focusing on industry-specific terms that drive
              qualified leads and foster strong partnerships
            </p>
          </div>
          {/* 04 Blockchain SEO */}
          <div
            className="smIndustries_services_Text_card_div  seoSpecialities_text_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-right"}
            data-aos-delay={4 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4 className="mx-auto">Blockchain SEO</h4>
            <p>
              We help you navigate the complex landscape of blockchain
              technology by optimizing content that educates and informs
              potential users about your solutions.
            </p>
          </div>
          {/*05  Technical SEO */}
          <div
            className="smIndustries_services_Text_card_div  seoSpecialities_text_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-right"}
            data-aos-delay={5 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/Small Business (1).png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4 className="mx-auto">Technical SEO</h4>
            <p>
              Ensure your website’s backend is optimized for search engines,
              addressing site speed, mobile responsiveness, and proper indexing
              to enhance overall performance.
            </p>
          </div>
          {/*06 E-commerce SEO */}
          <div
            className="smIndustries_services_Text_card_div seoSpecialities_text_card"
            data-aos={isLargeMobileView ? "fade-up" : "fade-right"}
            data-aos-delay={6 * 200}
          >
            <div className="smIndustries_services_card_icon">
              <img
                src="/Images/ServicesImage/Allicons/B2B.png"
                alt="smBrandGrowth_services_card image"
              />
            </div>
            <h4 className="mx-auto">E-commerce SEO</h4>
            <p>
              Improve product visibility and drive sales for online stores by
              focusing on essential aspects like product descriptions, images,
              and customer reviews.
            </p>
          </div>
        </div>
      </section>
      {/* Don’t overlook the power of SEO */}
      <section className="container">
        <div
          className="professionalModeration_div professionalService_card_onSeo_page"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Don’t overlook the power of SEO
            </h1>
            <p className="professionalModeration_service_offers_para">
              If SEO isn’t a key part of your marketing strategy yet, it should
              be. Think of it as an investment, not just another cost. The
              return on investment can be massive. SEO gives you the chance to
              reach billions of people who are actively searching for services
              or products like yours, without paying for ads.
              <br />
              In fact, more than 50% of marketers say organic search brings the
              highest ROI compared to any other marketing channel. But showing
              up on the first page of Google isn’t as simple as it used to be.
              That’s where Tojo Global comes in. With our expert SEO services,
              you can achieve long-lasting results that will keep delivering for
              your business. It takes time and effort, but the results make it
              all worth it.
            </p>

            <div className="hero_btn_style">
              <Link to="/contact">
                <button className="customFooterBoxbtn2 custombtn frisBtn">
                  <span>Make a Intro Call </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* contact us featcher  */}
      <ServiceContactUs />
    </main>
  );
};

export default SeoOnPage;
