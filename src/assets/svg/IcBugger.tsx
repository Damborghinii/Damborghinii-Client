import type { SVGProps } from "react";
const SvgIcBugger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      stroke="#52525B"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="M16.668 5.398H3.335M16.668 10.398H3.335M16.668 15.398H3.335"
    />
  </svg>
);
export default SvgIcBugger;
