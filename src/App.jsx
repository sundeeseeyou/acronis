// import { useEffect } from "react";
// import NavigationBar from "./components/NavigationBar";
// import BannerImage from "./components/BannerImage";
// import OurProduct from "./components/OurProduct";
// import Features from "./components/Features";
// import Brand from "./components/Brand";
// import Testimonial from "./components/Testimonial";
// import "./App.css";
// import CallToAction from "./components/CallToAction";
// import FooterWithSocial from "./components/FooterWithSocial";
// import Contact from "./components/Contact";
// import ReactGA from "react-ga4";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";

// // Google Analytics initialization
// const initializeGA = () => {
//   ReactGA.initialize("G-TB82KR2CW9");
// };

// const logPageView = () => {
//   ReactGA.send("pageview");
// };

// function AnalyticsWrapper({ children }) {
//   const location = useLocation();

//   useEffect(() => {
//     logPageView();
//   }, [location]);

//   return <>{children}</>;
// }

// function App() {
//   useEffect(() => {
//     initializeGA(); // Initialize GA4 when the app loads
//   }, []);

//   return (
//     <Router>
//       <AnalyticsWrapper>
//         <NavigationBar />
//         <BannerImage />
//         <OurProduct />
//         <Features />
//         <Brand />
//         <Testimonial />
//         <CallToAction />
//         <Contact />
//         <FooterWithSocial />
//       </AnalyticsWrapper>
//     </Router>
//   );
// }

// export default App;

import { useEffect, Suspense, lazy } from "react";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Google Analytics initialization
const initializeGA = () => {
  ReactGA.initialize("G-TB82KR2CW9");
};

const logPageView = () => {
  ReactGA.send("pageview");
};

function AnalyticsWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return <>{children}</>;
}

// Lazy load components
const NavigationBar = lazy(() => import("./components/NavigationBar"));
const BannerImage = lazy(() => import("./components/BannerImage"));
const OurProduct = lazy(() => import("./components/OurProduct"));
const Features = lazy(() => import("./components/Features"));
const Brand = lazy(() => import("./components/Brand"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const CallToAction = lazy(() => import("./components/CallToAction"));
const Contact = lazy(() => import("./components/Contact"));
const FooterWithSocial = lazy(() => import("./components/FooterWithSocial"));

function App() {
  useEffect(() => {
    initializeGA(); // Initialize GA4 when the app loads
  }, []);

  return (
    <Router basename="/website2">
      <AnalyticsWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavigationBar />
                  <BannerImage />
                  <OurProduct />
                  <Features />
                  <Brand />
                  <Testimonial />
                  <CallToAction />
                  <Contact />
                  <FooterWithSocial />
                </>
              }
            />
            {/* Add other routes as needed */}
          </Routes>
        </Suspense>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
