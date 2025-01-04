import React, { useEffect, useState } from "react";
import { LinksFunction } from "@remix-run/node";

import styles from "../../css/background.css?url";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
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
        <svg className="w-full h-full">
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
        </svg>
    </div>
  );
}