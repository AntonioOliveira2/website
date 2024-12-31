import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import styles from "../css/index.css?url";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Check if the user has already visited the page
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited === true) {
      // Play the animation if this is the first visit
      setHasPlayed(true);

      // Mark as visited in localStorage
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div className="m-[120px] font-semibold text-7xl text-gray-400">
      <div className={`${!hasPlayed ? "slide-in-left" : ""}`}>
        Welcome to
      </div>
      <div className={`${!hasPlayed ? "slide-in-right delay-250" : ""}`}>
        my personal
      </div>
      <div className={`${!hasPlayed ? "slide-in-left delay-500" : ""}`}>
        website.
      </div>
    </div>
  );
}