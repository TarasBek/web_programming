import React from "react";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <h2 className="text-center text-xl font-semibold">Loading...</h2>
      <p className="w-1/2 text-center">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default Loading;
