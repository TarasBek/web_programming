import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import CatalogList from "../components/Catalog/CatalogList";
import Filters from "../components/Catalog/Filters";
import Loading from "../components/Loading/Loading";
import { GlobalContext } from "../context/GlobalState";

const Catalogue = () => {
  const { isLoading } = useContext(GlobalContext);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
 }


  return (
    <Wrapper>
      <Filters />
      <CatalogList />
    </Wrapper>
  );
};

export default Catalogue;
