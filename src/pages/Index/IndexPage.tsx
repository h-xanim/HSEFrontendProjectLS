import React from "react";

const LazyAbout = React.lazy(() => import(/* webpackChunkName: "About" */ "./About"));
const LazyHome = React.lazy(() => import(/* webpackChunkName: "Home" */ "./Home"));
const LazyLanding = React.lazy(() => import(/* webpackChunkName: "Landing" */ "./Landing"));
const LazyLandingMenu = React.lazy(() => import(/* webpackChunkName: "LandingMenu" */ "./LandingMenu"));

export const IndexPage: React.FC = () => (
  <>
    <LazyHome />
    <LazyLanding />
    <LazyAbout />
    <LazyLandingMenu />
  </>
);
