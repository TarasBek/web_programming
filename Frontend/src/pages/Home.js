import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import PoolList from "../components/Cards/PoolList";
import Heading from "../components/Heading/Heading";
import ListingTitle from "../components/Menu/ListingTitle";
import { GlobalContext } from "../context/GlobalState";
import Loading from "../components/Loading/Loading";


const Home = () => {
  const { pools, isLoading } = useContext(GlobalContext);

  const firstPool = pools[0];

   if (isLoading) {
     return (
       <Wrapper>
         <Loading />
       </Wrapper>
     );
  }

  return (
    <Wrapper>
      {pools.length > 0 ? <Heading pool={firstPool} /> : ""}
      <div className="my-6 flex justify-between">
        <ListingTitle />
      </div>
      <PoolList />
    </Wrapper>
  );
};

export default Home;
