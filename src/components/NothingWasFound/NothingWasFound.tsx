import React from "react";

const NothingWasFound: React.FC = () => {
  return (
    <div
      className="mt-5 text-center text-secondary fw-bold"
      data-testid="nothingComponent"
    >
      No issues were found
    </div>
  );
};

export default NothingWasFound;
