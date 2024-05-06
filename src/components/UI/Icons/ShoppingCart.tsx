import React, { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

const ShoppingCartIcon: FC<IconProps> = ({ ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.45172 18.9355C7.89711 18.9355 8.25817 18.5745 8.25817 18.1291C8.25817 17.6837 7.89711 17.3226 7.45172 17.3226C7.00632 17.3226 6.64526 17.6837 6.64526 18.1291C6.64526 18.5745 7.00632 18.9355 7.45172 18.9355Z"
      stroke="#727280"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3226 18.9355C16.768 18.9355 17.129 18.5745 17.129 18.1291C17.129 17.6837 16.768 17.3226 16.3226 17.3226C15.8772 17.3226 15.5161 17.6837 15.5161 18.1291C15.5161 18.5745 15.8772 18.9355 16.3226 18.9355Z"
      stroke="#727280"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 2H4.22581L6.3871 12.7984C6.46084 13.1697 6.66283 13.5032 6.9577 13.7406C7.25257 13.9779 7.62153 14.104 8 14.0968H15.8387C16.2172 14.104 16.5861 13.9779 16.881 13.7406C17.1759 13.5032 17.3779 13.1697 17.4516 12.7984L18.7419 6.03226H5.03226"
      stroke="#727280"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShoppingCartIcon;
