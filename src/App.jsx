import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavbarNav from "./Component/Navbars/Navbars";
import HomePage from "./Component/HomePage/HomePage";
import Erro from "./Component/ErroPage/Erro";
import AboutPage from "./Component/AboutPage/AboutPage";
import Clients from "./Component/ClientsPages/Clients";
import Footer from "./Component/Footer/Footer";

import CareerPage from "./Component/CareerPage/CareerPage";
import ContactUS from "./Component/ContactUsPage/ContactUS";
import BlogPage from "./Component/BlogPage/BlogPage";
import CommunityManagement from "./Component/Services/Mangement/CommunityManagement";
import SocailMediaManagement from "./Component/Services/Mangement/SocailMediaManagement";
import Content from "./Component/Services/Marketing/ContentMarketing";
import BlockchainDev from "./Component/Services/Development/BlockchainDev";
import AppDev from "./Component/Services/Development/AppDev";
import Logo from "./Component/Services/Design/Logo";
import Stationery from "./Component/Services/Design/Stationery";
import SocialMediaDesign from "./Component/Services/Design/SocialMediaDesign";
import EcommercePhotoEditing from "./Component/Services/Design/EcommercePhotoEditing";
import WhitePaperDesign from "./Component/Services/Design/WhitePaperDesign";
import WebDesign from "./Component/Services/Design/WebDesign";
import UxUi from "./Component/Services/Design/Uxui";
import SeoMarketing from "./Component/Services/Marketing/SeoOnPage";
import Package from "./Component/Services/Package/Package";
import Listing from "./Component/Services/Listing/Listing";
import Artical from "./Component/BlogPage/Artical/Artical";
import ScrollToTop from "./Component/UniversalComponent/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import JobDescription from "./Component/CareerPage/JobDescription";
import ApplyFrom from "./Component/CareerPage/ApplyFrom";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import { AppProvider } from "./AppContext";
import FixedBottomIcon from "./Component/FixedWhatApp/FixedBottomIcon";
import { AnimatePresence, motion } from "framer-motion";
import SocailMediaModarator from "./Component/Services/Mangement/SocailMediaModarator";
import SeoOnPage from "./Component/Services/Marketing/SeoOnPage";
import SeoOffPage from "./Component/Services/Marketing/SeoOffPage";
import SocailMediaMarketing from "./Component/Services/Marketing/SocailMediaMarketing";
import SearchEngineMarketing from "./Component/Services/Marketing/SearchEngineMarketing";
import WebContentWrting from "./Component/Services/Content/WebContentWrting";
import VideoEditting from "./Component/Services/Video/VideoEditting";
import LeadGenaration from "./Component/Services/Marketing/LeadGenaration";
import { WordPressDev } from "./Component/Services/Development/WordPressDev";
import InfluencerMarketing from "./Component/Services/Marketing/InfluencerMarketing";
import { MotionGraphics } from "./Component/Services/Video/MotionGraphics";
import WhitePaperContentWrting from "./Component/Services/Content/WhitePaperContentWrting";
import AmazonMarketing from "./Component/Services/Marketing/AmazonMarketing";
import TeamPage from "./Component/TeamMangementPage/TeamPage";
import CryptoTokenDevelopment from "./Component/Services/Development/CryptoTokenDevelopment";
import { NftPlatformDevelopment } from "./Component/Services/Development/NftPlatformDevelopment";
import PlayToEarnGameDevelopment from "./Component/Services/Development/PlayToEarnGameDevelopment";
import WebDevelopment from "./Component/Services/Development/WebDevelopment";
import WooCommerceDevelopment from "./Component/Services/Development/WooCommerceDevelopment";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/job/:jobId/:jobname" element={<JobDescription />} />
        <Route path="/job/:jobId/:jobname/apply" element={<ApplyFrom />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:title" element={<Artical />} />
        {/* sevices Route */}
        {/* Management service routes */}
        <Route
          path="/services/mangement/community-management"
          element={<CommunityManagement />}
        />
        <Route
          path="/services/mangement/social-media-management"
          element={<SocailMediaManagement />}
        />
        <Route
          path="/services/mangement/social-media-moderation"
          element={<SocailMediaModarator />}
        />
        {/* Marketing service routes */}
        <Route path="/services/marketing/on-page-seo" element={<SeoOnPage />} />
        <Route
          path="/services/marketing/off-page-seo"
          element={<SeoOffPage />}
        />
        <Route
          path="/services/marketing/influencer-marketing"
          element={<InfluencerMarketing />}
        />
        <Route
          path="/services/marketing/socail-media-marketing"
          element={<SocailMediaMarketing />}
        />
        <Route
          path="/services/marketing/search-engine-marketing"
          element={<SearchEngineMarketing />}
        />
        <Route
          path="/services/marketing/amazon-marketing"
          element={<AmazonMarketing />}
        />
        <Route
          path="/services/marketing/content-marketing"
          element={<Content />}
        />
        <Route
          path="/services/marketing/lead-genaration"
          element={<LeadGenaration />}
        />

        {/* development router */}
        <Route
          path="/services/development/blockchain-development"
          element={<BlockchainDev />}
        />
        <Route
          path="/services/development/crypto-token-development"
          element={<CryptoTokenDevelopment />}
        />
        <Route
          path="/services/development/nft-platform-development"
          element={<NftPlatformDevelopment />}
        />
        <Route
          path="/services/development/play-to-earn-game-development"
          element={<PlayToEarnGameDevelopment />}
        />
        <Route
          path="/services/development/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/services/development/app-development"
          element={<AppDev />}
        />
        <Route
          path="/services/development/woocommerce-development"
          element={<WooCommerceDevelopment />}
        />

        <Route
          path="/services/development/wordpress-development"
          element={<WordPressDev />}
        />
        {/* design router */}
        <Route path="/services/design/logo-design" element={<Logo />} />
        <Route
          path="/services/design/stationery-design"
          element={<Stationery />}
        />
        <Route
          path="/services/design/social-media-design"
          element={<SocialMediaDesign />}
        />
        <Route
          path="/services/design/e-commerce-photo-editing"
          element={<EcommercePhotoEditing />}
        />
        <Route
          path="/services/design/white-paper-design"
          element={<WhitePaperDesign />}
        />
        <Route path="/services/design/web-design" element={<WebDesign />} />
        <Route path="/services/design/ui-ux-design" element={<UxUi />} />
        {/* video editing service */}
        <Route
          path="/services/videos/video-editing"
          element={<VideoEditting />}
        />
        <Route
          path="/services/videos/motion-graphics"
          element={<MotionGraphics />}
        />

        {/* content whiting */}
        <Route
          path="/services/content/web-content-writing"
          element={<WebContentWrting />}
        />
        <Route
          path="/services/content/white-paper-content"
          element={<WhitePaperContentWrting />}
        />

        {/* package */}
        <Route path="/packages" element={<Package />} />
        {/* listing */}
        <Route path="/services/listing" element={<Listing />} />
        {/* privacy policy page  */}
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <AppProvider>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <FixedBottomIcon />
          <ScrollToTop />
          <NavbarNav />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </AppProvider>
    </HelmetProvider>
  );
};

export default App;
