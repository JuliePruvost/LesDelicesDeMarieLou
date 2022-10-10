import React from "react";

const FacebookIcon = ({ width, height }: { width: string; height: string }) => (
    <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM256 448c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192C448 361.8 361.9 448 256 448zM320.3 256H272c-8.8 0-16-7.2-16-16v-48.3c0-17.5-14.2-31.7-31.7-31.7h-0.6c-17.5 0-31.7 14.2-31.7 31.7v96.6c0 17.5 14.2 31.7 31.7 31.7h96.6c17.5 0 31.7-14.2 31.7-31.7v-0.6C352 270.1 337.8 256 320.3 256z"></path>
    </svg>
);

export default FacebookIcon;