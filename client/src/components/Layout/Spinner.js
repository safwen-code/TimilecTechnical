import React from "react";

const Spinner = () => {
  return (
    <div
      class="spinner-border d-flex justify-content-center mt-3"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
