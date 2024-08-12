import { NavLink } from "@remix-run/react";
import { Theme, useTheme } from "~/utils/theme-provider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { KBarButton } from "pliny/search/KBarButton.js";
import MobileNav from "./MobileNav";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "border-b-2 border-cyan-700" : "";

const Header = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <header className="w-full max-w-7xl mx-auto p-10 border-b border-gray-100">
      <nav className="hidden sm:block">
        <ul className="flex gap-16 text-lg font-semibold">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className={navLinkClass}>
              Work
            </NavLink>
          </li>
          <li>
            <KBarButton>
              <div className="hidden items-center rounded-md border-[1px] border-gray-300 dark:border-black dark:bg-black px-2 py-1 font-medium text-gray-900 sm:flex dark:text-dark-main hover:border-cyan-700 transition-colors duration-300">
                <div className="px-2 dark:text-dark-sub ">Search ...</div>
                <div className="dark:text-dark-sub">⌘K</div>
              </div>
            </KBarButton>
          </li>
          <li className="ml-auto">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 text-white rounded flex items-center gap-2"
            >
              {theme === Theme.LIGHT ? (
                <SunIcon className="h-6 w-6 text-black" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </li>
        </ul>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
