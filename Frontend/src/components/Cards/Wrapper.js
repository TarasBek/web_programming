import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-10">
        {children}
      </section>
    </div>
  );
};

export default Wrapper;
