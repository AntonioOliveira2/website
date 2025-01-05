import { Link, useLocation } from "@remix-run/react";

export default function Navbar() {
    const location = useLocation();
    const showHomeButton = !(location.pathname === "/");
    
    const homeButton = (
        <li className="mr-6">
            <Link to="/" className="text-base text-white hover:text-gray-400">Home</Link>
        </li>
    );

    return (
        <nav className="bg-gray-800">
            <div className="py-3 flex justify-between">
                <div className="pl-5 justify-left items-left">
                    <Link to="/">
                        <img className="invert w-10 hover:scale-125 transform transition duration-250" src="/website/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <ul className="flex">
                        {showHomeButton && homeButton}
                        <li className="mr-6">
                            <Link to="/material/fatima-concelho" className="text-base text-white hover:text-gray-400">Fatima Concelho</Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/" className="text-base text-white hover:text-gray-400">Link</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-right justify-right">
                    <button className="bg-grey-200 hover:bg-blue-300
                     text-blue-600 font-semibold hover:text-white 
                     p-2 mr-3 border border-blue-500 hover:border-transparent 
                     rounded shadow">
                        <a href="/website/example.pdf">My CV</a>
                    </button>
                </div>
            </div>
        </nav>
    );
  }
  