// src/analytics.js
import ReactGA from "react-ga4";

export const initializeGA = () => {
  // Replace with your Measurement ID (G-XXXXXXXXXX)
  ReactGA.initialize("G-TB82KR2CW9");
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
