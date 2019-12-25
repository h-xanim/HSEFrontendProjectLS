import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MenuAlbumPage } from "./pages/Menu/MenuAlbumPage";
import { Layout } from "./components/Layout";
import { ChunkLoader } from "./ChunkLoader";
import { LazyIndexPage, LazyMenuPage } from "./lazyPages";

export const App: React.FC = () => (
  <BrowserRouter>
    <React.Suspense fallback={<ChunkLoader />}>
      <Layout>
        <Route path="/" exact component={LazyIndexPage} />
        <Route path="/menu" exact component={LazyMenuPage} />
        <Route path="/menu/:id" exact component={MenuAlbumPage} />
      </Layout>
    </React.Suspense>
  </BrowserRouter>
);
