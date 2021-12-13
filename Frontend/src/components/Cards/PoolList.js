import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Button from "../Button/Button";
import Card from "./Card";

const PoolList = () => {
  const { pools, searchKeyword } = useContext(GlobalContext);

  const [showMore, setShowMore] = useState(false);

  const filteredPools = pools.filter((pool) =>
  pool.name.toLowerCase().includes(searchKeyword)
  );

  return (
    <React.Fragment>
      {filteredPools.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPools.slice(0, showMore ? pools.length : 4).map((pool) => (
              <Card key={pool.id} pool={pool} />
            ))}
          </div>
          {filteredPools.length > 4 ? (
            <div className="flex justify-center py-8">
              <Button
                onClick={() => setShowMore(!showMore)}
                label={!showMore ? "Show more" : "Show less"}
              />
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No Data</p>
      )}
    </React.Fragment>
  );
};

export default PoolList;
