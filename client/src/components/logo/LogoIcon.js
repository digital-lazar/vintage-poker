import React from 'react';
import theme from '../../styles/theme';

const LogoIcon = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7,2.42,17,7.25,18.4,9.76l4.14-7.34L23.91,0H4.62A1.62,1.62,0,0,0,3.21,2.43l11,19.43a1.63,1.63,0,0,0,2.84,0h0L6.06,2.45Z"
        transform='translate(-3 0)'
        fill={theme.colors.primaryCta}
      />
      <path
        d="M26.84,0h0a.48.48,0,0,0-.4.23l-8,14.2L12.89,4.87H10.05L17,16.94l1.42,2.5,1.42-2.5L28,2.45A1.66,1.66,0,0,0,26.84,0Z"
        transform='translate(-3 0)'
        fill={theme.colors.primaryCta}
      />
  </svg>
);

export default LogoIcon;
