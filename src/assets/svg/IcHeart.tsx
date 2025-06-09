import type { SVGProps } from "react";
const SvgIcHeart = ({
  stroke = "none",
  fill = "none",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12.864 4.128c2.453 0 4.102 2.336 4.102 4.514 0 4.412-6.842 8.025-6.966 8.025s-6.966-3.613-6.966-8.025c0-2.178 1.649-4.514 4.102-4.514 1.409 0 2.33.714 2.864 1.34.534-.626 1.455-1.34 2.864-1.34"
    />
  </svg>
);
export default SvgIcHeart;
