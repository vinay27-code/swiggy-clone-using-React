import React from "react";

const Banner = () => {
  return (
    <div className="bg-yellow-300 text-black px-4 py-3 text-sm text-center font-medium">
      ⚠️ To view restaurant data, please click
      <a
        href="https://cors-anywhere.herokuapp.com/corsdemo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline mx-1"
      >
        this link
      </a>
      and click “Request temporary access to the demo server”. Then reload this page.
    </div>
  );
};

export default Banner;
