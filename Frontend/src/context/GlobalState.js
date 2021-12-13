import React, { createContext, useEffect, useState } from "react";
import poolsApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [poolTypes, setPoolsType] = useState([]);
  const [filters, setFilters] = useState([]);
  const [pools, setPools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    poolsApi
      .getPoolTypes()
      .then(({ data }) => setPoolsType(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    poolsApi
      .getPools(filters)
      .then(({ data }) => {
        setPools(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filters]);

  return (
    <GlobalContext.Provider
      value={{
        pools,
        searchKeyword,
        filters,
        isLoading,
        poolTypes,
        setSearchKeyword,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
