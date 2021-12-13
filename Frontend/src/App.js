import React, { lazy, Suspense } from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import Catalogue from "./pages/Catalog";
import Home from "./pages/Home";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import Loading from "./components/Loading/Loading";
import Wrapper from "./components/Cards/Wrapper";

const PoolsDetails = lazy(() => import("./pages/PoolDetails"));

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Suspense
        fallback={
          <Wrapper>
            <Loading />
          </Wrapper>
        }
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/catalog" component={Catalogue} exact />
          <Route path="/catalog/:id" component={PoolsDetails} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </Suspense>
      <Footer />
    </GlobalProvider>
  );
}

export default App;