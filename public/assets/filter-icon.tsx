import React from "react";

export default function FilterIcon({ fill = "black" }: { fill: string }) {
  return (
    <svg
      width="1.4rem"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      id="filter"
    >
      <path
        strokeWidth="4px"
        stroke={fill}
        d="m1 10.399 19 20v18.405l10-6.25V30.399l19-20V1H1v9.399zM3 3h44v6.601l-19 20v11.845l-6 3.75V29.601l-19-20V3z"
      ></path>
    </svg>
  );
}
