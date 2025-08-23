import type { SVGProps } from "react";

const SvgIcHamburgerButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 12"
    fill="none"
    {...props}
  >
    <path
      d="M14.668 1L1.33464 1"
      stroke="#52525B"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M14.668 6L1.33464 6"
      stroke="#52525B"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M14.668 11H1.33464"
      stroke="#52525B"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgIcHamburgerButton;
