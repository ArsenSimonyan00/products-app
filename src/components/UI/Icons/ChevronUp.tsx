import React, { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const ChevronUp: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 13L10 7L16 13"
        stroke="#AEC2EA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronUp;
