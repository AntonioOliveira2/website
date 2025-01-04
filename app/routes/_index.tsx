import type { LinksFunction } from "@remix-run/node";
import styles from "../css/index.css?url";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div className="m-[120px] font-semibold text-7xl text-gray-400">
      <div className="flex slide-in-left">
        Welcome to
      </div>
      <div className="flex slide-in-right delay-250">
        my personal
      </div>
      <div className="flex slide-in-left delay-500">
        website.
      </div>
    </div>
  );
}