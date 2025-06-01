import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPopUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <rect
      width={62.7}
      height={62.7}
      x={0.65}
      y={0.65}
      fill="#E4E4E7"
      rx={31.35}
    />
    <rect width={7.6} height={19} x={28.201} y={16.3} fill="#fff" rx={3.04} />
    <circle cx={32.001} cy={43.9} r={3.8} fill="#fff" />
  </svg>
);
export default SvgIcPopUp;
