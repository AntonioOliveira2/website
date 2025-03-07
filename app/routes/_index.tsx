import type { LinksFunction } from "@remix-run/node";
import styles from "../css/index.css?url";
import { useEffect, useState } from "react";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
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
    <>
      <div className="md:m-[120px] min-[240px]:m-[60px] font-semibold md:text-7xl min-[240px]:text-5xl text-gray-400">
        <div className="flex slide-in-left">
          Welcome to
        </div>
        <div className="flex slide-in-right delay-[2250ms]" style={{'animation-delay' : '250ms'}}>
          my personal
        </div>
        <div className="flex slide-in-left delay-[4500ms]" style={{'animation-delay' : '500ms'}}>
          website.
        </div>
      </div>
      <div className="absolute bottom-0 right-0 md:m-[120px] min-[240px]:m-[60px]">
        <div className="font-semibold md:text-7xl min-[240px]: text-5xl text-gray-400 slide-in-bottom" style={{'animation-delay' : '1000ms'}}>
          <div>An engineer</div>
          <div>in the making.</div>
        </div>
      </div>
    </>
  );
}