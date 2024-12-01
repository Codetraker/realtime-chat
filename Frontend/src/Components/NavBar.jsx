import { Link } from "react-router-dom";
import { MessageSquareQuote } from "lucide-react";

export const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-10">
        <div className="flex-1">
          <Link to="/">
            <div className="btn btn-ghost">
              <div className="flex justify-center flex-col h-full">
                <MessageSquareQuote color="yellow" />
              </div>
              <div className="h-full flex justify-center flex-col">
                <h2>ChatterBox+</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full bg-slate-700">
                <span class="text-xl">S</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
