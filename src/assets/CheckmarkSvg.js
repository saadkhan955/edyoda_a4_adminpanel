import * as React from "react";
const CheckmarkSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    transform="scale(1 -1)"
    {...props}
  >
    <path d="M7.293 11.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414L10 9.414l-2.293 2.293z" />
  </svg>
);
export default CheckmarkSvg;