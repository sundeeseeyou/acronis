import NavigationBar from "./components/NavigationBar";
import BannerImage from "./components/BannerImage";
import OurProduct from "./components/OurProduct";
import Features from "./components/Features";
import Brand from "./components/Brand";
import Testimonial from "./components/Testimonial";
import "./App.css";
import CallToAction from "./components/CallToAction";
import FooterWithSocial from "./components/FooterWithSocial";

function App() {
  return (
    <>
      <NavigationBar />
      <BannerImage />
      <OurProduct />
      <Features />
      <Brand />
      <Testimonial />
      <CallToAction />
      <FooterWithSocial />
    </>
  );
}

export default App;
