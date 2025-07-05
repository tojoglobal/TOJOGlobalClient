import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../src/Style/ServicesPageStyle/Development/BlockchainDev.Style.css";
import BlockchainDevelopmentServiceSvg from "./SVGDev/BlockchainDevelopmentServiceSvg";
import BenefitsBlockChainDevelopmentsvg from "./SVGDev/BenefitsBlockChainDevelopmentsvg";
import BlockChaniNftPlatfromDevWhyChooseSvg from "./SVGDev/BlockChaniNftPlatfromDevWhyChooseSvg";
import { BlockChainDevPlayToEarnBenefit } from "./SVGDev/BlockChainDevPlayToEarnBenefit";
import { BlockChainDevPlayToEarnBenefitsSvg } from "./SVGDev/BlockChainDevPlayToEarnBenefitsSvg";
import { BlockChainDevPlayProcessIcon } from "./SVGDev/BlockChainDevPlayProcessIcon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppContext } from "../../../AppContext";
gsap.registerPlugin(ScrollTrigger);
const BlockchainDev = () => {
  const { isLargeMobileView, isMobileView } = useContext(AppContext);
  useGSAP(() => {
    // Animation Timeline for Hero Section
    let heroTimeline = gsap.timeline();
    heroTimeline
      .from(".webContentWriting_hero_text_part h1", {
        x: -560,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      .from(".webContentWriting_hero_text_part p", {
        x: 560,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      .from(".hero_btn_style", {
        y: 560,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
  }, []);

  return (
    <main className="maindiv">
      {/*Shape The Future With TOJO Global’s Blockchain Innovation */}
      <section className="blockchaniDev_hero_section">
        <div className="container webContentWriting_hero_part">
          <div className="webContentWriting_hero_text_part">
            {isMobileView ? (
              <>
                <div className="hero_page_strongText">
                  <h2
                    style={{
                      ...(isMobileView && {
                        paddingRight: "0rem",
                      }),
                    }}
                  >
                    {" "}
                    Shape The{" "}
                    <span className="headdingGradientText"> Future </span>
                  </h2>
                  <h3 className="homePageHeroSubHeadingFristText">
                    with TOJO Global{" "}
                  </h3>
                  <h3 className="homePageHeroSubHeadingSecondText">
                    Blockchain Innovation
                  </h3>
                </div>
                <p
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                    }),
                  }}
                >
                  TOJO Global offers advanced blockchain development services,
                  creating secure and scalable solutions such as custom tokens,
                  NFT platforms & play-to-earn games to help businesses unlock
                  the power of blockchain technology.
                </p>{" "}
              </>
            ) : (
              <>
                <h1>
                  Shape The Future With TOJO Global’s Blockchain Innovation
                </h1>
                <p>
                  TOJO Global offers advanced blockchain development services,
                  creating secure and scalable solutions such as custom tokens,
                  NFT platforms, and play-to-earn games to help businesses
                  unlock the power of blockchain technology.
                </p>
              </>
            )}

            <div className="hero_btn_style">
              <a href="https://www.behance.net/TOJO_Global" target="_blank">
                <button className="custombtn hero_btn1 secondBtn">
                  <span>OUR WORKS</span>
                </button>
              </a>
              <Link to="/contact">
                <button className="custombtn hero_btn2 fristBtn">
                  <span>Lets Make a Call</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Blockchain Development Services */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "2rem",
              }),
            }}
          >
            {" "}
            Our Blockchain Development Services
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                textAlign: "justify",
                fontSize: "13px",
                lineHeight: "120%",
              }),
            }}
          >
            TOJO Global offers advanced blockchain development services,
            creating secure and scalable solutions such as custom tokens, NFT
            platforms, and play-to-earn games to help businesses unlock the
            power of blockchain technology.
          </p>
        </div>
        <div
          className="blockchain_services_main_div"
          style={{
            ...(isMobileView && {
              marginTop: "0.5rem",
            }),
          }}
        >
          {/* 01 */}
          <div
            className="blockchain_services_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <BlockchainDevelopmentServiceSvg
              blockchainDevelopmentCardSvgImage={
                "blockchainDevelopmentCardSvgImage01.svg"
              }
            />
            <div className="blockchain_services_text_div">
              <h2 className="elementHeadingText">Crypto Token Development</h2>
            </div>
          </div>
          {/* 02 */}
          <div
            className="blockchain_services_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <BlockchainDevelopmentServiceSvg
              blockchainDevelopmentCardSvgImage={
                "blockchainDevelopmentCardSvgImage02.svg"
              }
            />
            <div className="blockchain_services_text_div">
              <h2 className="elementHeadingText">NFT Platform Development</h2>
            </div>
          </div>
          {/* 03 */}
          <div
            className="blockchain_services_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <BlockchainDevelopmentServiceSvg
              blockchainDevelopmentCardSvgImage={
                "blockchainDevelopmentCardSvgImage03.svg"
              }
            />
            <div className="blockchain_services_text_div">
              <h2 className="elementHeadingText">
                Play-to-Earn Game Development
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* What is Crypto Token Development? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "2.2rem",
              }),
            }}
          >
            {" "}
            <span className="headdingGradientText">Crypto Token</span>{" "}
            Development
          </h1>
        </div>
        <div className="appDev_industries_services_main_div">
          {/* 02 */}
          <div className="appDev_industries_services_div">
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/involves-creating-digital-tokens-on-blockchain-net.png"
                className="img-fluid"
                alt="appDev_industries_services_img"
              />
            </div>
            {/* text */}
            <div className="appDev_industries_services_text_div">
              <div data-aos="fade-right">
                <h4 className="appDev_industries_services_subHeading">
                  What is Crypto Token Development?
                </h4>
                <p
                  className="appDev_industries_services_paraText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                    }),
                  }}
                >
                  Crypto token development involves creating digital tokens on
                  blockchain networks, enabling the representation of assets,
                  utilities, or rights. Unlike traditional cryptocurrencies,
                  which operate on their own blockchains, tokens are typically
                  created using existing networks like Ethereum (ERC-20) or
                  Binance Smart Chain (BEP-20), Tron Chain (TRC-20). These
                  tokens can serve various purposes, from currency and rewards
                  to digital shares, providing a foundation for decentralized
                  applications (dApps) or specific business ecosystems.
                </p>
                <p
                  className="appDev_industries_services_paraText"
                  style={{
                    ...(isMobileView && {
                      textAlign: "justify",
                      fontSize: "12px",
                    }),
                  }}
                >
                  The process of creating these tokens includes designing their
                  structure, writing smart contracts, and ensuring security.
                  Smart contracts automate functions like token distribution and
                  transfers, allowing for transparent and efficient management
                  of transactions without middlemen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOJO Global's Crypto Token Development Services */}
      <section className="container">
        <div className="blockChain_cryptoToken_development_top_part_div">
          <div
            className="blockChain_cryptoToken_development_top_part_text_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
          >
            <h1
              className="topHeadingStyle text-start"
              style={{
                ...(isMobileView && {
                  marginTop: "0.5rem",
                  fontSize: "20px",
                }),
              }}
            >
              TOJO Global's Crypto Token Development Services
            </h1>
            <p
              className="blockChain_cryptoToken_development_paraStyle text-md-start"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              At TOJO Global, we offer full-cycle crypto token development
              services, from conceptualization to post-launch support. Our team
              works closely with clients to deliver custom token solutions that
              align with their business objectives.
            </p>
          </div>
          {/*crypto token devlopment image div */}
          <div className="blockChain_cryptoToken_development_top_part_image_div">
            <img
              src="/Images/ServicesImage/development/blockChainCrypto-token__2_-removebg-preview01.png"
              className="sm:img-fluid blockChainCryptoTokenMainImage"
              alt="blockchain_cryptoToken_development_top_part_img"
              data-aos="fade-up"
              data-aos-delay={1 * 200}
            />
            <img
              src="/Images/ServicesImage/development/blockChainCryptoTokenleftSideImage.png"
              className="sm:img-fluid blockChainCryptoTokenLeftImage"
              alt="blockchain_cryptoToken_development_top_part_img"
              data-aos="fade-up"
              data-aos-delay={2 * 200}
            />
            <img
              src="/Images/ServicesImage/development/blockChainCryptoTokenRightSideImage.png"
              className="sm:img-fluid blockChainCryptoTokenRightImage"
              alt="blockchain_cryptoToken_development_top_part_img"
              data-aos="fade-up"
              data-aos-delay={3 * 200}
            />
          </div>
        </div>
        {/* blockchain devlopment Our Services Include */}
        <div
          className="blockchain_dev_OurServicesInclude"
          // style={{ paddingTop: "5rem" }}
          style={{
            ...(isMobileView && {
              marginTop: "1.2rem",
            }),
          }}
        >
          <h1
            data-aos="fade-down"
            className="blockchain_dev_OurServicesInclude_headding"
            style={{
              ...(isMobileView && {
                fontSize: "20px",
              }),
            }}
          >
            Our Services Include
          </h1>
          <div className="blockchain_dev_OurServicesInclude_keyPoint_mainDiv">
            {/* 01 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-up"
              data-aos-delay={1 * 100}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/development/blockchainCryptoTokenDevOurServiceIcon01.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Token Design:
              </h4>
              <p
                className="appDev_industries_services_paraText"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                  }),
                }}
              >
                We help you define the purpose and structure of your token,
                ensuring that it serves your business goals, whether it’s a
                utility token for a platform or a security token representing
                assets.
              </p>
            </div>
            {/* 02 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-up"
              data-aos-delay={2 * 100}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/development/blockchainCryptoTokenDevOurServiceIcon02.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Blockchain Selection:
              </h4>
              <p
                className="appDev_industries_services_paraText"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                  }),
                }}
              >
                We integrate your token with the best-suited blockchain
                platform—Ethereum, Binance Smart Chain, or others—to meet your
                specific needs.
              </p>
            </div>
            {/* 03 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-up"
              data-aos-delay={3 * 100}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/development/blockchainCryptoTokenDevOurServiceIcon03.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Smart Contract Development:
              </h4>
              <p
                className="appDev_industries_services_paraText"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                  }),
                }}
              >
                Our team develops secure, efficient smart contracts to automate
                token functions, ensuring that the rules of token creation and
                distribution are transparent and error-free.
              </p>
            </div>
            {/* 04 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-up"
              data-aos-delay={4 * 100}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/development/blockchainCryptoTokenDevOurServiceIcon04.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Token Minting and Deployment:
              </h4>
              <p
                className="appDev_industries_services_paraText"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                  }),
                }}
              >
                Once the design and development phases are completed, we handle
                the minting of tokens and help deploy them onto your chosen
                blockchain.
              </p>
            </div>
            {/* 05 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-up"
              data-aos-delay={5 * 100}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/development/blockchainCryptoTokenDevOurServiceIcon05.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Compliance and Security Audits:
              </h4>
              <p
                className="appDev_industries_services_paraText"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                  }),
                }}
              >
                TOJO Global ensures your token meets regulatory standards and
                passes through rigorous security checks to eliminate
                vulnerabilities.
              </p>
            </div>
            {/* 06 */}
            <div
              className="blockchain_dev_OurServicesInclude_keyPoint_div"
              data-aos="fade-up"
              data-aos-delay={6 * 100}
            >
              <div className="blockchainCryptoTokenDevOurServiceIcon_svg">
                <img
                  src="/Images/ServicesImage/development/blockchainCryptoTokenDevOurServiceIcon06.svg"
                  alt="blockchainCryptoTokenDevOurServiceIcon"
                  className="img-fluid"
                />
              </div>

              <h4 className="appDev_industries_services_subHeading">
                Post-Launch Support:
              </h4>
              <p
                className="appDev_industries_services_paraText"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                  }),
                }}
              >
                Our involvement continues after deployment, offering technical
                support and making necessary adjustments as your project
                evolves.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* block chanin development Why Choose TOJO Global? */}
      <section className="container">
        <div className="sectionTopTextstyle">
          <h1 className="topHeadingStyle" data-aos="fade-down">
            {" "}
            Why Choose TOJO Global?
          </h1>
        </div>
        <div className="whyChoose_blockChain_development_main_div">
          {/* 01 left */}
          <div
            className="whyChoose_blockChain_development_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={1 * 200}
          >
            <img
              src="/Images/ServicesImage/development/whyChooseBlockChainDevelopmentIcon01.svg"
              alt="whyChooseBlockChainDevelopmentIcon"
              className="img-fluid whyChooseBlockChainDevelopmentIcon"
            />
            <h4 className="appDev_industries_services_subHeading">
              Regulatory Compliance
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                }),
              }}
            >
              We ensure your token adheres to relevant regulations, reducing the
              risk of legal complications. Staying updated on evolving
              regulations in different jurisdictions allows us to guide you
              through the complexities of compliance.
            </p>
          </div>
          {/* 02 right */}
          <div
            className="whyChoose_blockChain_development_div whychoose_blockchanin_right_div"
            data-aos="fade-right"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/development/whyChooseBlockChainDevelopmentIcon02.svg"
              alt="whyChooseBlockChainDevelopmentIcon"
              className="img-fluid whyChooseBlockChainDevelopmentIcon"
            />
            <h4 className="appDev_industries_services_subHeading">
               Extensive Expertise
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                }),
              }}
            >
              We bring years of experience in blockchain development, working
              across diverse industries like finance, gaming, and supply chain
              management. Our team of developers specializes in multiple
              blockchain protocols, ensuring your token is built with precision
              and innovation.
            </p>
          </div>
          {/* 03 left */}
          <div
            className="whyChoose_blockChain_development_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={3 * 200}
          >
            <img
              src="/Images/ServicesImage/development/whyChooseBlockChainDevelopmentIcon03.svg"
              alt="whyChooseBlockChainDevelopmentIcon"
              className="img-fluid whyChooseBlockChainDevelopmentIcon"
            />
            <h4 className="appDev_industries_services_subHeading">
              Cost-Effective Solutions
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                }),
              }}
            >
              We offer competitive pricing for businesses of all sizes. Whether
              you’re a startup with a limited budget or a large enterprise, we
              provide flexible solutions without compromising quality.
            </p>
          </div>
          {/* 04 right */}
          <div
            className="whyChoose_blockChain_development_div whychoose_blockchanin_right_div"
            data-aos="fade-right"
            data-aos-delay={4 * 200}
          >
            <img
              src="/Images/ServicesImage/development/whyChooseBlockChainDevelopmentIcon04.svg"
              alt="whyChooseBlockChainDevelopmentIcon"
              className="img-fluid whyChooseBlockChainDevelopmentIcon"
            />
            <h4 className="appDev_industries_services_subHeading">
              Customized Solutions
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                }),
              }}
            >
              Each business is unique, and we provide tailored solutions to meet
              your specific tokenization needs. Whether you are launching a new
              cryptocurrency or creating a token for a decentralized platform,
              we ensure that your token fits your vision.
            </p>
          </div>
          {/* 05 left */}
          <div
            className="whyChoose_blockChain_development_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={5 * 200}
          >
            <img
              src="/Images/ServicesImage/development/whyChooseBlockChainDevelopmentIcon05.svg"
              alt="whyChooseBlockChainDevelopmentIcon"
              className="img-fluid whyChooseBlockChainDevelopmentIcon"
            />
            <h4 className="appDev_industries_services_subHeading">
              Seamless Ecosystem Integration
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                }),
              }}
            >
              Our tokens are designed to integrate effortlessly into various
              platforms, wallets, and exchanges, allowing users to buy, sell, or
              trade tokens easily.
            </p>
          </div>
          {/* 06 right */}
          <div
            className="whyChoose_blockChain_development_div whychoose_blockchanin_right_div"
            data-aos="fade-right"
            data-aos-delay={2 * 200}
          >
            <img
              src="/Images/ServicesImage/development/whyChooseBlockChainDevelopmentIcon06.svg"
              alt="whyChooseBlockChainDevelopmentIcon"
              className="img-fluid whyChooseBlockChainDevelopmentIcon"
            />
            <h4 className="appDev_industries_services_subHeading">
              Top-Notch Security
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                }),
              }}
            >
              Our development process includes extensive security audits to
              safeguard your tokens and smart contracts, minimizing the risk of
              vulnerabilities or exploits.
            </p>
          </div>
        </div>
      </section>
      {/*How TOJO Global’s Token Development Benefits Your Business*/}
      <section className="container howTojoGloablTokenBenefitsSection">
        <div className="sectionTopTextstyle">
          <h1 className="topHeadingStyle" data-aos="fade-down">
            How TOJO Global’s Token Development Benefits Your Business
          </h1>
        </div>
        <div
          className="Benefits_BlockChain_Development_main_div"
          data-aos="fade-up"
        >
          <BenefitsBlockChainDevelopmentsvg />
          {/* 01 */}
          <div className="Benefits_BlockChain_Development_textDiv_div Benefits_BlockChain_vectorText_901">
            <h4 className="appDev_industries_services_subHeading">
              Efficient Fundraising
            </h4>
            <p className="paraTextStyle">
              Tokens are widely used for raising funds through methods like
              Initial Coin Offerings (ICOs). With TOJO Global's expert token
              development, you can create tokens that attract investors and
              generate capital efficiently.
            </p>
          </div>
          {/* 02 */}
          <div className="Benefits_BlockChain_Development_textDiv_div Benefits_BlockChain_vectorText_902">
            <h4 className="appDev_industries_services_subHeading">
              Liquidity and Tradeability
            </h4>
            <p className="paraTextStyle">
              Tokens can be traded easily on various exchanges, offering
              liquidity for holders and businesses alike. This opens new
              opportunities for growth and asset monetization.
            </p>
          </div>

          {/* 03 */}
          <div className="Benefits_BlockChain_Development_textDiv_div Benefits_BlockChain_vectorText_903">
            <h4 className="appDev_industries_services_subHeading">
              Boosted Customer Engagement
            </h4>
            <p className="paraTextStyle">
              Tokens can drive higher user engagement, particularly when used in
              reward programs. They incentivize customers to stay involved in
              your platform, increasing loyalty and retention.
            </p>
          </div>
          {/* 04 */}
          <div className="Benefits_BlockChain_Development_textDiv_div Benefits_BlockChain_vectorText_904">
            <h4 className="appDev_industries_services_subHeading">
              Global Market Access
            </h4>
            <p className="paraTextStyle">
              Blockchain technology eliminates geographical boundaries, allowing
              your business to interact with global investors and participants.
              With our tokens, you can extend your reach into new, untapped
              markets.
            </p>
          </div>
          {/* 05 */}
          <div className="Benefits_BlockChain_Development_textDiv_div Benefits_BlockChain_vectorText_905">
            <h4 className="appDev_industries_services_subHeading">
              Decentralized Control
            </h4>
            <p className="paraTextStyle">
              Our token development services enable businesses to build
              decentralized platforms, empowering users through token-based
              governance systems that encourage community participation.
            </p>
          </div>
        </div>
      </section>
      {/*  Conclusion nft platform */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">Conclusion</h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            TOJO Global offers reliable and comprehensive crypto token
            development services, helping businesses innovate through blockchain
            technology. Whether you're looking to create a token for
            fundraising, enhance user engagement, or tokenize assets, our
            solutions are designed to meet your unique needs. Partner with TOJO
            Global and harness the power of tokenization to drive your business
            forward.
          </p>
        </div>

        <div className="blockchain_conclusionnft_platfrom_topTextstyle">
          <h1 className="topHeadingStyle" data-aos="fade-down">
            {" "}
            <span className="headdingGradientText">NFT Platform</span>{" "}
            Development
          </h1>
        </div>
        <div className="appDev_industries_services_main_div">
          {/*  image and text part*/}
          <div className="blockchain_conclusionnft_platfrom123  appDev_industries_services_div">
            {/* img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            >
              <img
                src="/Images/ServicesImage/development/blockChain_deve_nft_platfrom_detailed-digital-illustration-representing-Non-Fungible-Tokens-featuring-interconnected-glowing-blocks-on-futuri.png"
                className="img-fluid"
                alt="appDev_industries_services_img"
              />
            </div>
            {/* text */}
            <div className="appDev_industries_services_text_div">
              <div data-aos="fade-right">
                <h1
                  className="blockChain_deve_nft_platfrom_subHeading"
                  style={{
                    ...(isMobileView && {
                      fontSize: "20px",
                    }),
                  }}
                >
                  What is NFT Platform Development?
                </h1>
                <p
                  className="appDev_industries_services_paraText"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  FTs (Non-Fungible Tokens) are unique digital assets that can
                  represent anything from artwork and music to virtual real
                  estate and in-game items. Unlike cryptocurrencies, each NFT is
                  one of a kind, secured by blockchain technology, making them
                  traceable and tamper-proof.
                </p>
                <p
                  className="appDev_industries_services_paraText"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  NFT platform development involves building a marketplace or
                  platform where users can create, buy, sell, and trade these
                  tokens. As the demand for digital assets grows, more
                  businesses and creators are looking to develop their own NFT
                  platforms. However, building a secure, scalable, and
                  user-friendly platform requires expertise in blockchain, smart
                  contracts, and user interface design. This is where TOJO
                  Global comes in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Our NFT Platform Development Services */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                fontSize: "20px",
                lineHeight: "120%",
                marginTop: "25px",
              }),
            }}
          >
            NFT Platform Development Services
          </h1>
          <p
            className="paraStyle mt-2 mt-md-4"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            We specialize in creating NFT platforms tailored to your specific
            needs, offering a wide range of features that make it easy to launch
            your marketplace and connect with users worldwide.
          </p>
        </div>

        <div
          data-aos="fade-down"
          className="blockchain_conclusionnft_platfrom_topTextstyle"
        >
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                fontSize: "20px",
                lineHeight: "120%",
                marginTop: "20px",
                marginBottom: "-5px",
              }),
            }}
          >
            Key Features We Provide
          </h1>
        </div>
        {/*  Key Features We Provide section div */}
        <div className="blockChain_nftPlatfromkeyFeatures_services_main_div">
          {/* leftText part  */}
          <div className="blockChain_nftPlatfromkeyFeatures_services_text_div blockChain_nftPlatfromkeyFeatures_services_left_text">
            {/* 01 */}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div whychoose_blockchanin_right_div"
              data-aos="fade-right"
              data-aos-delay={1 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon01.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Customizable NFT Marketplace
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We develop bespoke platforms that reflect your brand and
                business model, whether it's a digital art gallery, gaming NFT
                hub, or a general NFT marketplace.
              </p>
            </div>
            {/* 02 */}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div whychoose_blockchanin_right_div"
              data-aos="fade-right"
              data-aos-delay={2 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon02.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Smart Contract Development
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We ensure smooth, automated processes through secure smart
                contracts that handle everything from minting new tokens to
                royalty distributions.
              </p>
            </div>
            {/* 03 */}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div whychoose_blockchanin_right_div"
              data-aos="fade-right"
              data-aos-delay={3 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon03.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Secure Wallet Integration
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                 Integrated wallets allow users to store, manage, and trade NFTs
                securely within the platform.
              </p>
            </div>
            {/* 04 */}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div whychoose_blockchanin_right_div"
              data-aos="fade-right"
              data-aos-delay={4 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon04.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                 Ongoing Support
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our services don’t end at deployment. We offer maintenance and
                updates to ensure your platform continues to operate smoothly as
                the market evolves.
              </p>
            </div>
          </div>
          {/* center Image */}
          <div className="blockChain_nftPlatfromkeyFeatures_services_center_img">
            <div className="blockChain_nftPlatfromkeyFeatures_services_center_underGradient_div"></div>
            <img
              src="/Images/ServicesImage/development/blockChain_nftPlatfromkeyFeatures_services_img_nft-token-with-technology.png"
              alt="blockChain_nftPlatfromkeyFeatures_services_img"
            />
          </div>
          {/* right text div part */}
          <div className="blockChain_nftPlatfromkeyFeatures_services_text_div blockChain_nftPlatfromkeyFeatures_services_right_text ">
            {/* 05*/}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
              data-aos-delay={1 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon05.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Multi-Blockchain Support
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our platforms support major blockchains like Ethereum, Binance
                Smart Chain, and Solana, providing flexibility and scalability
                for your operations.
              </p>
            </div>
            {/* 06*/}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
              data-aos-delay={2 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon06.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                White-Label Solutions
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                If you're looking for a faster time to market, our white-label
                platforms can be customized with your brand identity, reducing
                development time.
              </p>
            </div>
            {/* 07*/}
            <div
              className="nftPlatfromkeyFeatures_blockchanin_right_div"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
              data-aos-delay={3 * 200}
            >
              <img
                src="/Images/ServicesImage/development/nftPlatfromkeyFeaturesBlockChainDevelopmentIcon07.svg"
                alt="whyChooseBlockChainDevelopmentIcon"
                className="img-fluid nftPlatfromkeyFeaturesBlockChainDevelopmentIcon"
              />
              <h4 className="appDev_industries_services_subHeading">
                User-Friendly Interfaces
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We design intuitive and accessible interfaces to enhance user
                experience for both buyers and creators, ensuring easy
                navigation and interaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose TOJO Global? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">Why Choose TOJO Global?</h1>
        </div>
        <div className="BlockChaniNftPlatfromDevWhyChoose_main_div">
          {/* 01 */}
          <div
            className="BlockChaniNftPlatfromDevWhyChoose_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <BlockChaniNftPlatfromDevWhyChooseSvg />
            <div className="BlockChaniNftPlatfromDevWhyChoose_text_icon_div">
              <div className="BlockChaniNftPlatfromDevWhyChoose_icon_div">
                <img
                  src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevWhyChoose_icon01.svg"
                  alt="BlockChaniNftPlatfromDevWhyChoose_icon"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Expertise in NFTs and Blockchain
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We have strong experience in blockchain and NFTs, creating
                secure, future-ready platforms. Whether Ethereum-based or
                multi-chain, we ensure your project is technically solid and
                meets your needs.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="BlockChaniNftPlatfromDevWhyChoose_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <BlockChaniNftPlatfromDevWhyChooseSvg />
            <div className="BlockChaniNftPlatfromDevWhyChoose_text_icon_div">
              <div className="BlockChaniNftPlatfromDevWhyChoose_icon_div">
                <img
                  src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevWhyChoose_icon02.svg"
                  alt="BlockChaniNftPlatfromDevWhyChoose_icon"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Tailored Solutions
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We understand that every project is different. We work closely
                with our clients to develop platforms that fit their unique
                business models and audience, ensuring each feature is aligned
                with your goals.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="BlockChaniNftPlatfromDevWhyChoose_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <BlockChaniNftPlatfromDevWhyChooseSvg />
            <div className="BlockChaniNftPlatfromDevWhyChoose_text_icon_div">
              <div className="BlockChaniNftPlatfromDevWhyChoose_icon_div">
                <img
                  src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevWhyChoose_icon03.svg"
                  alt="BlockChaniNftPlatfromDevWhyChoose_icon"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                Top-Notch Security
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                In the digital world, security is key. We prioritize the
                protection of users’ data and assets with secure coding
                practices, regular auditing of smart contracts, and robust
                encryption techniques.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div
            className="BlockChaniNftPlatfromDevWhyChoose_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <BlockChaniNftPlatfromDevWhyChooseSvg />
            <div className="BlockChaniNftPlatfromDevWhyChoose_text_icon_div">
              <div className="BlockChaniNftPlatfromDevWhyChoose_icon_div">
                <img
                  src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevWhyChoose_icon04.svg"
                  alt="BlockChaniNftPlatfromDevWhyChoose_icon"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                End-to-End Services
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We offer a comprehensive service, from initial consultation and
                design to smart contract deployment and platform launch. Our
                team handles everything, so you don’t have to juggle multiple
                vendors.
              </p>
            </div>
          </div>
          {/* 05 */}
          <div
            className="BlockChaniNftPlatfromDevWhyChoose_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <BlockChaniNftPlatfromDevWhyChooseSvg />
            <div className="BlockChaniNftPlatfromDevWhyChoose_text_icon_div">
              <div className="BlockChaniNftPlatfromDevWhyChoose_icon_div">
                <img
                  src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevWhyChoose_icon05.svg"
                  alt="BlockChaniNftPlatfromDevWhyChoose_icon"
                />
              </div>
              <h4 className="appDev_industries_services_subHeading">
                User-Centric Design
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We focus on creating user-friendly platforms that encourage
                engagement. A seamless experience for both creators and
                collectors leads to better retention and growth for your
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How TOJO Global’s NFT Platform Can Help You */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                fontSize: "20px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            How TOJO Global’s NFT Platform Can Help You
          </h1>
        </div>
        <div className="BlockChaniNftPlatfromDevHelp_main_div">
          {/* 01 */}
          <div
            className="BlockChaniNftPlatfromDevHelp_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="BlockChaniNftPlatfromDevHelp_icon_div">
              <img
                src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevHelp_icon01.svg"
                alt="BlockChaniNftPlatfromDevHelp_icon01.svg"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Monetize Digital Assets
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Our platform allows creators to tokenize and sell digital content,
              from art and music to virtual goods. This opens up new revenue
              streams and helps creators reach a broader audience.
            </p>
          </div>
          {/* 02 */}
          <div
            className="BlockChaniNftPlatfromDevHelp_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="BlockChaniNftPlatfromDevHelp_icon_div">
              <img
                src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevHelp_icon02.svg"
                alt="BlockChaniNftPlatfromDevHelp_icon01.svg"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Reach a Global Market
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              NFTs are accessible globally, and our platforms are designed to
              attract international buyers, investors, and collectors,
              maximizing your reach.
            </p>
          </div>
          {/* 03 */}
          <div
            className="BlockChaniNftPlatfromDevHelp_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="BlockChaniNftPlatfromDevHelp_icon_div">
              <img
                src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevHelp_icon03.svg"
                alt="BlockChaniNftPlatfromDevHelp_icon01.svg"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Stay Ahead of the Curve
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Blockchain and NFTs are quickly becoming essential to digital
              business. By developing your own NFT platform, you're positioning
              yourself at the forefront of innovation, ready for the future of
              digital commerce.
            </p>
          </div>
          {/* 04 */}
          <div
            className="BlockChaniNftPlatfromDevHelp_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="BlockChaniNftPlatfromDevHelp_icon_div">
              <img
                src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevHelp_icon04.svg"
                alt="BlockChaniNftPlatfromDevHelp_icon01.svg"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Boost Brand Engagement
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              NFTs offer an exciting way to connect with your audience, whether
              through exclusive content, membership tokens, or interactive
              experiences. Our platforms help you build brand loyalty and
              increase customer engagement.
            </p>
          </div>
          {/* 05 */}
          <div
            className="BlockChaniNftPlatfromDevHelp_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="BlockChaniNftPlatfromDevHelp_icon_div">
              <img
                src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevHelp_icon05.svg"
                alt="BlockChaniNftPlatfromDevHelp_icon01.svg"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Stand Out in a Competitive Market
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              With more players entering the NFT space, having a cutting-edge
              platform with advanced features will set you apart. TOJO Global
              ensures your platform is not only functional but offers a top-tier
              experience for users.
            </p>
          </div>
          {/* 06 */}
          <div
            className="BlockChaniNftPlatfromDevHelp_div"
            data-aos="fade-down"
            data-aos-delay={5 * 200}
          >
            <div className="BlockChaniNftPlatfromDevHelp_icon_div">
              <img
                src="/Images/ServicesImage/development/BlockChaniNftPlatfromDevHelp_icon05.svg"
                alt="BlockChaniNftPlatfromDevHelp_icon01.svg"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Unlock New Opportunities
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              NFTs go beyond art and collectibles. They can represent real
              estate, tickets, certifications, and more. Our platform lets you
              explore diverse possibilities, helping you innovate and tap into
              new markets with ease.
            </p>
          </div>
        </div>
      </section>

      {/*  Conclusion Play-to-Earn Game Development */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-down">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "20px",
              }),
            }}
          >
            Conclusion
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            Building an NFT platform is a powerful way to tap into the growing
            world of digital assets. TOJO Global’s expertise in blockchain and
            NFT development can help you create a secure, customizable, and
            user-friendly marketplace that meets your business needs. Whether
            you’re a creator, business, or investor, we’ll provide the tools and
            support you need to succeed in the NFT space.
            <br />
            Let us bring your NFT platform vision to life!
          </p>
        </div>

        <div
          className="blockchain_conclusionnft_platfrom_topTextstyle"
          data-aos="fade-up"
        >
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "20px",
              }),
            }}
          >
            {" "}
            <span className="headdingGradientText">Play-to-Earn Game</span>{" "}
            Development
          </h1>
          <p
            className="paraStyle mt-2 mt-md-4"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            In the rapidly evolving world of gaming, Play-to-Earn (P2E) games
            have emerged as a groundbreaking innovation, offering players the
            opportunity to earn real-world rewards while playing their favorite
            games. At TOJO Global, we are at the forefront of developing these
            dynamic ecosystems, where players not only engage for entertainment
            but also generate income, creating a truly rewarding experience.
          </p>
        </div>
        <div
          className="appDev_industries_services_main_div"
          data-aos="fade-down"
        >
          {/*  image and text part*/}
          <div className="blockChain_PlayToEarnGameDevelopment_main_div">
            {/* text */}
            <div className="appDev_industries_services_text_div">
              <div>
                <h1 className="blockChain_deve_nft_platfrom_subHeading">
                  What is Play-to-Earn?
                </h1>
                <p
                  className="appDev_industries_services_paraText"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                    }),
                  }}
                >
                  Play-to-Earn games are a revolutionary concept where gamers
                  are rewarded with digital assets, such as cryptocurrency or
                  NFTs (Non-Fungible Tokens), for their participation and
                  in-game achievements. These rewards can then be traded, sold,
                  or used within the game ecosystem, providing a unique blend of
                  entertainment and economic opportunity. This model empowers
                  players, allowing them to take ownership of their in-game
                  efforts, making it more than just a pastime but also a
                  potential source of income.
                </p>
              </div>
            </div>
            {/* img */}
            <div className="blockChain_PlayToEarnGameDevelopment_imgDiv">
              <img
                src="/Images/ServicesImage/development/cryptocurrency-or-nfts--non-fungible-tokens--type-__1_-removebg-preview 1.svg"
                className="img-fluid"
                alt="appDev_industries_services_img"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  How Will Play-to-Earn Benefit You? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "30px",
              }),
            }}
          >
            How Will Play-to-Earn Benefit You?
          </h1>
          <p
            className="paraStyle mt-2 mt-md-4"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            For gamers, the Play-to-Earn model offers a range of benefits beyond
            traditional gameplay. It allows you to:
          </p>
        </div>
        {/* text section  */}
        <div
          className="blockChain_dev_PlayToEarn_Benefit_main_div"
          style={{
            ...(isMobileView && {
              paddingTop: "20px",
            }),
          }}
        >
          {/* 01 */}
          <div
            className="blockChain_dev_PlayToEarn_Benefit_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            {/* blockChain_dev_PlayToEarn_Benefit svg componet  */}
            <BlockChainDevPlayToEarnBenefit />
            <div className="blockChain_dev_PlayToEarn_Benefit_icon_image_div">
              <img
                src="/Images/ServicesImage/development/play-to-earn-icon-01.svg"
                alt="blockChain_dev_PlayToEarn_Benefit_icon"
              />

              <h4 className="appDev_industries_services_subHeading">
                Monetize your skills:
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                    marginRight: "10px",
                  }),
                }}
              >
                Earn rewards for your time and effort, transforming gaming into
                a potentially lucrative activity.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="blockChain_dev_PlayToEarn_Benefit_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            {/* blockChain_dev_PlayToEarn_Benefit svg componet  */}
            <BlockChainDevPlayToEarnBenefit />
            <div className="blockChain_dev_PlayToEarn_Benefit_icon_image_div">
              <img
                src="/Images/ServicesImage/development/play-to-earn-icon-02.svg"
                alt="blockChain_dev_PlayToEarn_Benefit_icon"
              />

              <h4 className="appDev_industries_services_subHeading">
                Ownership of in-game assets:
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                    marginRight: "10px",
                  }),
                }}
              >
                The digital assets you earn can be traded or sold, giving you
                full control over their value.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="blockChain_dev_PlayToEarn_Benefit_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            {/* blockChain_dev_PlayToEarn_Benefit svg componet  */}
            <BlockChainDevPlayToEarnBenefit />
            <div className="blockChain_dev_PlayToEarn_Benefit_icon_image_div">
              <img
                src="/Images/ServicesImage/development/play-to-earn-icon-03.svg"
                alt="blockChain_dev_PlayToEarn_Benefit_icon"
              />

              <h4 className="appDev_industries_services_subHeading">
                Active engagement:
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                    marginRight: "10px",
                  }),
                }}
              >
                With financial incentives, players tend to stay more engaged,
                resulting in a more immersive and rewarding experience.
              </p>
            </div>
          </div>
        </div>
        {/* bottom para text  */}
        <div className="sectionTopTextstyle mt-4 mt-md-0">
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
                marginRight: "10px",
              }),
            }}
          >
            For businesses and developers, Play-to-Earn games foster a thriving
            ecosystem that attracts a loyal, active player base, opening doors
            to new revenue streams and long-term growth.
          </p>
        </div>
      </section>

      {/* TOJO Global’s Expertise in Play-to-Earn Game Development */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "30px",
              }),
            }}
          >
            TOJO Global’s Expertise in{" "}
            <span className="headdingGradientText"> Play-to-Earn Game</span>{" "}
            Development
          </h1>
        </div>
        <div
          className="blockChain_dev_PlayToEarn_expertise_main_div"
          style={{
            ...(isMobileView && {
              marginTop: "17px",
            }),
          }}
        >
          {/* 01 */}
          <div
            className="blockChain_dev_PlayToEarn_expertise_text_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={1 * 200}
          >
            <h4 className="appDev_industries_services_subHeading">
              Expertise in game design:
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Our team of experts specializes in developing engaging, immersive,
              and user-centric gameplay experiences. We create games that are
              not only visually stunning but also deeply immersive, providing
              players with a sense of ownership and control over their in-game
              assets
            </p>
          </div>
          {/* 02 */}
          <div className="blockChain_dev_PlayToEarn_expertise_main_box_div">
            {/*01 Custom Game Design */}
            <div
              className="blockChain_dev_PlayToEarn_expertise_box_div"
              data-aos="fade-up"
              data-aos-delay={2 * 200}
            >
              <img
                src="/Images/ServicesImage/development/blockChain_dev_PlayToEarn_expertise_icon01.svg"
                alt="blockChain_dev_PlayToEarn_expertise_icon"
                className="blockChain_dev_PlayToEarn_expertise_icon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Custom Game Design
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We craft engaging, interactive games that align with the
                Play-to-Earn model, ensuring an immersive user experience.
              </p>
            </div>
            {/*02 NFT and Token Development  */}
            <div
              className="blockChain_dev_PlayToEarn_expertise_box_div"
              data-aos="fade-up"
              data-aos-delay={3 * 200}
            >
              <img
                src="/Images/ServicesImage/development/blockChain_dev_PlayToEarn_expertise_icon02.svg"
                alt="blockChain_dev_PlayToEarn_expertise_icon"
                className="blockChain_dev_PlayToEarn_expertise_icon"
              />
              <h4 className="appDev_industries_services_subHeading">
                NFT and Token Development
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                NFT and Token Development TOJO Global helps create unique NFTs
                and in-game tokens that add value to your gaming ecosystem.
              </p>
            </div>
            {/*03 Blockchain Integration */}
            <div
              className="blockChain_dev_PlayToEarn_expertise_box_div"
              data-aos="fade-up"
              data-aos-delay={4 * 200}
            >
              <img
                src="/Images/ServicesImage/development/blockChain_dev_PlayToEarn_expertise_icon03.svg"
                alt="blockChain_dev_PlayToEarn_expertise_icon"
                className="blockChain_dev_PlayToEarn_expertise_icon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Blockchain Integration
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                Our team ensures seamless integration with blockchain
                technology, enabling secure and transparent transactions for
                in-game assets.
              </p>
            </div>
            {/* 04 Ongoing Support */}
            <div
              className="blockChain_dev_PlayToEarn_expertise_box_div"
              data-aos="fade-up"
              data-aos-delay={5 * 200}
            >
              <img
                src="/Images/ServicesImage/development/blockChain_dev_PlayToEarn_expertise_icon04.svg"
                alt="blockChain_dev_PlayToEarn_expertise_icon"
                className="blockChain_dev_PlayToEarn_expertise_icon"
              />
              <h4 className="appDev_industries_services_subHeading">
                Ongoing Support
              </h4>
              <p
                className="paraTextStyle"
                style={{
                  ...(isMobileView && {
                    fontSize: "13px",
                    textAlign: "justify",
                    lineHeight: "120%",
                  }),
                }}
              >
                We provide continuous support post-launch, ensuring the game
                evolves with user needs and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Play-to-Earn Game Development Why Choose TOJO Global? */}
      <section className="container ">
        <div className="sectionTopTextstyle"></div>
        <div className="appDev_industries_services_main_div">
          <div className="appDev_industries_services_div">
            {/* left side img */}
            <div
              className="appDev_industries_services_imgDiv"
              data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
              data-aos-delay={2 * 200}
              style={{
                ...(isMobileView && {
                  marginTop: "-17px",
                }),
              }}
            >
              <img
                src="/Images/ServicesImage/development/blockChaninPlayToEarnGameDevelopmentWhyChoose_img.png"
                className="img-fluid"
                alt="blockChaninPlayToEarnGameDevelopmentWhyChoose_img"
              />
            </div>
            {/* right side text */}
            <div className="appDev_industries_services_text_div">
              <div>
                {/* right side top text  */}
                <div data-aos="fade-right" data-aos-delay={1 * 200}>
                  <h4 className="blockChain_deve_nft_platfrom_subHeading">
                    Why Choose TOJO Global?
                  </h4>
                  <p
                    className="appDev_industries_services_paraText"
                    style={{
                      ...(isMobileView && {
                        fontSize: "13px",
                        textAlign: "justify",
                        lineHeight: "120%",
                      }),
                    }}
                  >
                    TOJO Global is a leader in innovative game development,
                    offering unparalleled expertise in the Play-to-Earn space.
                    Here is the reason for partnering with us:
                  </p>
                </div>

                {/* right side bottom key point text div   */}
                <div
                  className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint"
                  style={{
                    ...(isMobileView && {
                      marginTop: "31px",
                    }),
                  }}
                >
                  {/* key point 01 */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay={2 * 200}
                    className="mt-2 mt-md-0"
                  >
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint_heddingIcon">
                      <div className="blockChaninPlayToEarnGameDevelopmentWhyChooseIconDiv">
                        <img
                          src="/Images/ServicesImage/development/blockChaninPlayToEarnGameDevelopmentWhyChooseIcon01.svg"
                          alt="blockChaninPlayToEarnGameDevelopmentWhyChooseIcon"
                        />
                      </div>

                      <h4>Proven Expertise:</h4>
                    </div>

                    <p
                      className="paraTextStyle"
                      style={{
                        ...(isMobileView && {
                          fontSize: "13px",
                          textAlign: "justify",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      Our team consists of experienced developers, blockchain
                      specialists, and creative designers who understand the
                      intricacies of P2E game development.
                    </p>
                    {/* text key pont why to TOJO gloabl  */}
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint"></div>
                  </div>
                  {/* key point 02 */}
                  <div data-aos="fade-up" data-aos-delay={3 * 200}>
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint_heddingIcon">
                      <div className="blockChaninPlayToEarnGameDevelopmentWhyChooseIconDiv">
                        <img
                          src="/Images/ServicesImage/development/blockChaninPlayToEarnGameDevelopmentWhyChooseIcon02.svg"
                          alt="blockChaninPlayToEarnGameDevelopmentWhyChooseIcon"
                        />
                      </div>

                      <h4>Tailored Solutions:</h4>
                    </div>

                    <p
                      className="paraTextStyle"
                      style={{
                        ...(isMobileView && {
                          fontSize: "13px",
                          textAlign: "justify",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      We customize our services to meet your unique business
                      goals and gaming vision, ensuring the end product is
                      perfectly aligned with your needs.
                    </p>
                    {/* text key pont why to TOJO gloabl  */}
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint"></div>
                  </div>
                  {/* key point 03 */}
                  <div data-aos="fade-up" data-aos-delay={4 * 200}>
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint_heddingIcon">
                      <div className="blockChaninPlayToEarnGameDevelopmentWhyChooseIconDiv">
                        <img
                          src="/Images/ServicesImage/development/blockChaninPlayToEarnGameDevelopmentWhyChooseIcon03.svg"
                          alt="blockChaninPlayToEarnGameDevelopmentWhyChooseIcon"
                        />
                      </div>

                      <h4>Cutting-Edge Technology:</h4>
                    </div>

                    <p
                      className="paraTextStyle"
                      style={{
                        ...(isMobileView && {
                          fontSize: "13px",
                          textAlign: "justify",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      We use the latest technologies to create fun, advanced
                      games with smooth gameplay and strong blockchain
                      integration for a great experience.
                    </p>
                    {/* text key pont why to TOJO gloabl  */}
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint"></div>
                  </div>
                  {/* key point 04*/}
                  <div data-aos="fade-up" data-aos-delay={5 * 200}>
                    <div className="blockChaninPlayToEarnGameDevelopmentWhyChoose_keyPoint_heddingIcon">
                      <div className="blockChaninPlayToEarnGameDevelopmentWhyChooseIconDiv">
                        <img
                          src="/Images/ServicesImage/development/blockChaninPlayToEarnGameDevelopmentWhyChooseIcon04.svg"
                          alt="blockChaninPlayToEarnGameDevelopmentWhyChooseIcon"
                        />
                      </div>

                      <h4>End-to-End Services:</h4>
                    </div>

                    <p
                      className="paraTextStyle"
                      style={{
                        ...(isMobileView && {
                          fontSize: "13px",
                          textAlign: "justify",
                          lineHeight: "120%",
                        }),
                      }}
                    >
                      TOJO Global is a leader in innovative game development,
                      offering unparalleled expertise in the Play-to-Earn space.
                      Here is the reason for partnering with us:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Why Choose TOJO Global for Blockchain Development? */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                marginTop: "30px",
                fontSize: "20px",
              }),
            }}
          >
            Why Choose TOJO Global for Blockchain Development?
          </h1>
          <p
            className="paraStyle"
            style={{
              ...(isMobileView && {
                fontSize: "13px",
                textAlign: "justify",
                lineHeight: "120%",
              }),
            }}
          >
            Choosing TOJO Global for your blockchain projects means partnering
            with a team of skilled developers who are at the forefront of
            blockchain technology. Here’s why businesses trust us:
          </p>
        </div>
        <div
          className="blockChain_dev_PlayToEarn_whyChoose_main_div"
          style={{
            ...(isMobileView && {
              paddingTop: "4rem",
            }),
          }}
        >
          {/* 01 */}
          <div
            className="blockChain_dev_PlayToEarn_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={1 * 200}
          >
            <div className="blockChain_dev_PlayToEarn_whyChoose_icon_div">
              <img
                src="/Images/ServicesImage/development/blockChainDevPlayToEarnWhyChooseIcon01.svg"
                alt="blockChainDevPlayToEarnWhyChooseIcon"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Expert Team
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              Our developers are well-versed in the latest blockchain
              technologies and platforms, allowing us to deliver robust and
              secure solutions for a variety of use cases.
            </p>
          </div>
          {/* 02 */}
          <div
            className="blockChain_dev_PlayToEarn_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={2 * 200}
          >
            <div className="blockChain_dev_PlayToEarn_whyChoose_icon_div">
              <img
                src="/Images/ServicesImage/development/blockChainDevPlayToEarnWhyChooseIcon02.svg"
                alt="blockChainDevPlayToEarnWhyChooseIcon"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Custom Solutions
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We offer fully customized blockchain solutions tailored to your
              specific business requirements, ensuring that our development
              aligns with your goals and objectives.
            </p>
          </div>
          {/* 03 */}
          <div
            className="blockChain_dev_PlayToEarn_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={3 * 200}
          >
            <div className="blockChain_dev_PlayToEarn_whyChoose_icon_div">
              <img
                src="/Images/ServicesImage/development/blockChainDevPlayToEarnWhyChooseIcon03.svg"
                alt="blockChainDevPlayToEarnWhyChooseIcon"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              Security-Focused Development
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We prioritize security in every blockchain project we undertake.
              From smart contract auditing to secure transaction handling, we
              ensure your blockchain application is resistant to vulnerabilities
              and hacks.
            </p>
          </div>
          {/* 04 */}
          <div
            className="blockChain_dev_PlayToEarn_whyChoose_div"
            data-aos="fade-down"
            data-aos-delay={4 * 200}
          >
            <div className="blockChain_dev_PlayToEarn_whyChoose_icon_div">
              <img
                src="/Images/ServicesImage/development/blockChainDevPlayToEarnWhyChooseIcon04.svg"
                alt="blockChainDevPlayToEarnWhyChooseIcon"
              />
            </div>
            <h4 className="appDev_industries_services_subHeading">
              End-to-End Support
            </h4>
            <p
              className="paraTextStyle"
              style={{
                ...(isMobileView && {
                  fontSize: "13px",
                  textAlign: "justify",
                  lineHeight: "120%",
                }),
              }}
            >
              We guide you through every stage of the blockchain development
              process, from initial consultation and planning to development,
              deployment, and post-launch support.
            </p>
          </div>
        </div>
      </section>
      {/* Benefits of Blockchain Development with TOJO Global */}
      <section className="container">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1
            className="topHeadingStyle"
            style={{
              ...(isMobileView && {
                fontSize: "20px",
              }),
            }}
          >
            Benefits of Blockchain Development with TOJO Global
          </h1>
        </div>
        <div className="blockChain_dev_PlayToEarn_benefits_main_div">
          {/* 01 */}
          <div
            className="blockChain_dev_PlayToEarn_benefits_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={1 * 200}
          >
            <BlockChainDevPlayToEarnBenefitsSvg />
            <div className="blockChainDev_PlayToEarn_benefits_icon_text_div">
              {/*blockChainDev_PlayToEarn_benefits_icon_div  */}
              <div className="blockChainDev_PlayToEarn_benefits_icon_div">
                <img
                  src="/Images/ServicesImage/development/playToEarnBenefitsIcon01.svg"
                  alt="blockChain_dev_PlayToEarn_benefits_icon"
                />
              </div>
              {/* blockChainDev_PlayToEarn_benefits_text_div */}
              <div className="blockChainDev_PlayToEarn_benefits_text_div">
                <h4 className="blockChainDev_PlayToEarn_benefits_textHeading">
                  Decentralization
                </h4>
                <p
                  className="blockChainDev_PlayToEarn_benefits_textSubHeading"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                      marginRight: "10px",
                    }),
                  }}
                >
                  Blockchain eliminates the need for intermediaries, enabling
                  direct transactions and data sharing between users, which
                  reduces costs and improves efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div
            className="blockChain_dev_PlayToEarn_benefits_div"
            data-aos="fade-right"
            data-aos-delay={2 * 200}
          >
            <BlockChainDevPlayToEarnBenefitsSvg />
            <div className="blockChainDev_PlayToEarn_benefits_icon_text_div">
              {/*blockChainDev_PlayToEarn_benefits_icon_div  */}
              <div className="blockChainDev_PlayToEarn_benefits_icon_div">
                <img
                  src="/Images/ServicesImage/development/playToEarnBenefitsIcon02.svg"
                  alt="blockChain_dev_PlayToEarn_benefits_icon"
                />
              </div>
              {/* blockChainDev_PlayToEarn_benefits_text_div */}
              <div className="blockChainDev_PlayToEarn_benefits_text_div">
                <h4 className="blockChainDev_PlayToEarn_benefits_textHeading">
                  Enhanced Security
                </h4>
                <p
                  className="blockChainDev_PlayToEarn_benefits_textSubHeading"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                      marginRight: "10px",
                    }),
                  }}
                >
                  Blockchain’s immutable nature and cryptographic security
                  ensure that your data and transactions are highly secure and
                  protected from unauthorized access.
                </p>
              </div>
            </div>
          </div>
          {/* 03 */}
          <div
            className="blockChain_dev_PlayToEarn_benefits_div"
            data-aos={isLargeMobileView ? "fade-up" : "fade-left"}
            data-aos-delay={3 * 200}
          >
            <BlockChainDevPlayToEarnBenefitsSvg />
            <div className="blockChainDev_PlayToEarn_benefits_icon_text_div">
              {/*blockChainDev_PlayToEarn_benefits_icon_div  */}
              <div className="blockChainDev_PlayToEarn_benefits_icon_div">
                <img
                  src="/Images/ServicesImage/development/playToEarnBenefitsIcon03.svg"
                  alt="blockChain_dev_PlayToEarn_benefits_icon"
                />
              </div>
              {/* blockChainDev_PlayToEarn_benefits_text_div */}
              <div className="blockChainDev_PlayToEarn_benefits_text_div">
                <h4 className="blockChainDev_PlayToEarn_benefits_textHeading">
                  Automation Smart Contract
                </h4>
                <p
                  className="blockChainDev_PlayToEarn_benefits_textSubHeading"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                      marginRight: "10px",
                    }),
                  }}
                >
                  Smart contracts allow automatic execution of specific actions
                  once predefined conditions are fulfilled, minimizing manual
                  efforts and boosting overall efficiency.
                </p>
              </div>
            </div>
          </div>
          {/* 04 */}
          <div
            className="blockChain_dev_PlayToEarn_benefits_div"
            data-aos="fade-right"
            data-aos-delay={4 * 200}
          >
            <BlockChainDevPlayToEarnBenefitsSvg />
            <div className="blockChainDev_PlayToEarn_benefits_icon_text_div">
              {/*blockChainDev_PlayToEarn_benefits_icon_div  */}
              <div className="blockChainDev_PlayToEarn_benefits_icon_div">
                <img
                  src="/Images/ServicesImage/development/playToEarnBenefitsIcon04.svg"
                  alt="blockChain_dev_PlayToEarn_benefits_icon"
                />
              </div>
              {/* blockChainDev_PlayToEarn_benefits_text_div */}
              <div className="blockChainDev_PlayToEarn_benefits_text_div">
                <h4 className="blockChainDev_PlayToEarn_benefits_textHeading">
                  Transparency
                </h4>
                <p
                  className="blockChainDev_PlayToEarn_benefits_textSubHeading"
                  style={{
                    ...(isMobileView && {
                      fontSize: "13px",
                      textAlign: "justify",
                      lineHeight: "120%",
                      marginRight: "10px",
                    }),
                  }}
                >
                  Every transaction on a blockchain is recorded in a public
                  ledger, ensuring transparency and traceability, which is
                  crucial for industries such as finance and supply chain
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*The TOJO Global Process  */}
      <section className="containter howTojoGloablTokenBenefitsSection">
        <div className="sectionTopTextstyle" data-aos="fade-up">
          <h1 className="topHeadingStyle">TOJO Global Process</h1>
        </div>
        {/* explainer_video_editing_whyChooseIcon.svg */}
        <div
          className="explainer_video_editing_whyChooseIcon_main_div"
          data-aos="fade-down"
        >
          <div className="explainer_video_editing_whyChooseIcon_div">
            <BlockChainDevPlayProcessIcon />
            {/* Consultation */}
            <div className="blockChainDev_playToEarn_consultation_text_div">
              <h5 className="elementHeadingText">Consultation</h5>
              <p className="elementParaText">
                We begin by understanding your business objectives and
                identifying how blockchain can be integrated to meet your
                specific needs.
              </p>
            </div>
            {/* Planning & Design*/}
            <div className="blockChainDev_playToEarn_planning_text_div">
              <h5 className="elementHeadingText">Planning & Design</h5>
              <p className="elementParaText">
                Our team works with you to create a roadmap for your blockchain
                project, including choosing the right blockchain platform,
                designing the architecture, and outlining the key features.
              </p>
            </div>
            {/*Development*/}
            <div className="blockChainDev_playToEarn_development_text_div">
              <h5 className="elementHeadingText">Development</h5>
              <p className="elementParaText">
                Once the plan is finalized, we proceed with the development of
                your blockchain application, including smart contract creation,
                token development, or platform construction.
              </p>
            </div>
            {/* Ongoing Maintenance*/}
            <div className="blockChainDev_playToEarn_ongoingMaintenance_text_div">
              <h5 className="elementHeadingText">Ongoing Maintenance</h5>
              <p className="elementParaText">
                Even after deployment, our team remains available to provide
                ongoing support, updates, and enhancements to keep your
                blockchain solution running smoothly.
              </p>
            </div>
            {/* Testing & Deployment*/}
            <div className="blockChainDev_playToEarn_testingDeployment_text_div">
              <h5 className="elementHeadingText">Testing & Deployment</h5>
              <p className="elementParaText">
                We rigorously test your blockchain solution to ensure it’s
                secure, functional, and ready for deployment. After testing, we
                launch the platform and provide post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Here comes TOJO GLOBAL where we specialize in creating unique logos */}
      <section className="container mb-5 mb-md-0">
        <div
          className="professionalModeration_div blockChainSolution_specialize_card"
          data-aos="fade-down"
        >
          <div className="professionalModeration_text_div">
            <h1 className="professionalModeration_service_offers_heading">
              Ready to Build Your Blockchain Solution?
            </h1>
            <p className="professionalModeration_service_offers_para">
              Whether you’re interested in launching a crypto token, developing
              an NFT marketplace, or creating a play-to-earn game, TOJO Global
              is here to help. Our blockchain development services are designed
              to meet your business’s unique needs and ensure long-term success.
            </p>
            <div className="hero_btn_style">
              <Link to="/contact">
                <button class="custombtn hero_btn1 secondBtn">
                  <span>Get Started Now </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlockchainDev;
