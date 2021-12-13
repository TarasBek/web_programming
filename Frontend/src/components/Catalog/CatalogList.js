import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import CatalogCard from "../Catalog/CatalogCard";
import NoDataText from "../NoDataText/NoDataText";

const CatalogList = () => {
  const { pools, searchKeyword } = useContext(GlobalContext);

  const filteredPools = pools.filter((pool) =>
  pool.name.toLowerCase().includes(searchKeyword)
  );

  return (
    <React.Fragment>
      {filteredPools.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPools.map((pool) => (
              <CatalogCard key={pool.id} pool={pool} />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <NoDataText />
      )}
    </React.Fragment>
  );
};

export default CatalogList;
