import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Wrapper from "../components/Cards/Wrapper";
import Heading from "../components/Heading/Heading";
import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const PoolDetails = (route) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { pools } = useContext(GlobalContext);
  
  const [selectedPool, setSelectedPool] = useState({
    id: null,
    name: null,
    valueOfWater: null,
    maxAmount: null,
    type: null,
  });

  const currentPoolId = route.match.params.id;

  useEffect(() => {
    const poolId = currentPoolId;
    const selectedPool = pools.find(
      (currentPoolTraversal) => currentPoolTraversal.id === parseInt(poolId)
    );
    setSelectedPool(selectedPool);
  }, [currentPoolId, pools]);

  return (
    <div>
      <Wrapper>
        <Heading pool={selectedPool} />
        <div className="flex justify-end py-8">
          <Button label="Go back" onClick={() => history.push("/catalog")} />
          <Button label="Add to cart" onClick={() => dispatch(addToCart(selectedPool))} />
        </div>
      </Wrapper>
    </div>
  );
};

export default PoolDetails;
