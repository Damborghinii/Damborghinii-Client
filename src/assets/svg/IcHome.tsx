import type { SVGProps } from "react";
const SvgIcHome = ({ fill = "none", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path
      d="M0.600098 19.65V7.05L9.0001 0.75L17.4001 7.05V19.65H11.1001V12.3H6.9001V19.65H0.600098Z"
      fill={fill}
    />
  </svg>
);

export default SvgIcHome;
