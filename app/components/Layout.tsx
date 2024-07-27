import { NavLink } from "@remix-run/react";
import { ReactNode } from "react";
import { Theme, useTheme } from "~/utils/theme-provider";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "border-b-2 border-cyan-700" : "";

export const Layout = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-custom-gradient dark:text-dark-main">
      <header className="w-full max-w-7xl mx-auto p-10 border-b border-gray-100">
        <nav>
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
          </ul>
        </nav>
        <button onClick={toggleTheme}>Toggle</button>
      </header>
      <main className="w-full max-w-7xl mx-auto flex-1 flex">
        {props.children}
      </main>
      <footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
        <span className="text-sm text-gray-500">
          Illustrations by{" "}
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
            Icons 8
          </a>{" "}
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </span>
      </footer>
    </div>
  );
};
