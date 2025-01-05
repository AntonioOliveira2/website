import React, { useEffect, useState } from "react";
import { LinksFunction } from "@remix-run/node";

import styles from "../../css/background.css?url";
import bgImage from "/website/background.png?url"


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "", href: "png"}
];


export default function MyComponent() {
  const [dimensions, setdimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setdimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Update size immediately on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 bg-gray-950 -z-10 w-full h-full">
      <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} xmlns="http://www.w3.org/2000.svg">
        <line className="pathLineBg" x1={`${3 * Math.max(dimensions.height, dimensions.width) / 4}`} y1={0} x2={`${0}`} y2={`${3 * Math.max(dimensions.height, dimensions.width) / 4}`}
        stroke="rgb(0, 104, 184)" strokeWidth="3" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="1s"
          begin="500ms"
          fill="freeze"
        />
        <animate
          attributeName="x1"
          from="0"
          to={`${3 * Math.max(dimensions.height, dimensions.width) / 4}`}
          dur="1s"
          begin="500ms"
          repeatCount="once"
          keySplines=".84 .32 .18 .8" 
          calcMode="spline"        
        />
        <animate
          attributeName="y1"
          from={`${3 * Math.max(dimensions.height, dimensions.width) / 4}`}
          to="0"
          dur="1s"
          begin="500ms"
          repeatCount="once"
          keySplines=".84 .32 .18 .8" 
          calcMode="spline"
        />    
        </line>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="50%" stopColor="rgb(3 7 18 / var(--tw-bg-opacity, 1))" />
            <stop offset="100%" stopColor="rgb(75 85 99 / var(--tw-bg-opacity, 1))" />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" fillOpacity={0} d={`M ${3 * Math.max(dimensions.height, dimensions.width) / 4 + 100 + 544 /** 16/9 * 306 */} -544 L -544 ${3 * Math.max(dimensions.height, dimensions.width) / 4 + 100 + 544}  L ${dimensions.width} ${dimensions.height} Z`}>
          <animate
          attributeName="fill-opacity"
          from="0"
          to="1"
          dur="500ms"
          begin="1500ms"
          fill="freeze"
          />
        </path>
       </svg>
    </div>
  );
}

