import { Component } from 'solid-js';

export const Divider: Component<{ color: string }> = ({ color = '#a2ba24' }) => (
  <svg
    style={{ display: 'block', 'background-color:': color, 'margin-bottom:': '-5px' }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#f6f6f6"
      fill-opacity="1"
      d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
  </svg>
);
