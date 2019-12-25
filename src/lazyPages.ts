import * as React from "react";

const LazyIndexPage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ "./pages/Index"));
const LazyMenuPage = React.lazy(() => import(/* webpackChunkName: "MenuPage" */ "./pages/Menu"));

export { LazyIndexPage, LazyMenuPage };
