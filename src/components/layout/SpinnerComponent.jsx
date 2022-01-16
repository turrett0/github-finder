import React from "react";
import Spinner from "../../components/Assets/spinner.gif";

function SpinnerComponent() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default SpinnerComponent;
