import type { SVGProps } from "react";
const SvgIcLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 27 33"
    {...props}
  >
    <path
      stroke="#7C4BC9"
      strokeWidth={0.898}
      d="M4.449 6v19.449M4.898 25h13.615M4.898 5.551h18.103M22.55 6v18.402M19.02 26.419l3.74-2.394"
    />
    <path
      fill="#7C4BC9"
      d="M18.067 10.102V20h-1.586l-4.689-6.768h-.082V20H9.933v-9.898h1.613l4.662 6.767h.096v-6.767z"
    />
  </svg>
);
export default SvgIcLogo;
