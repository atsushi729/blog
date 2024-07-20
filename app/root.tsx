import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";
import { Layout } from "./components/Layout";
import CommandBar from "./components/searchBar";
import "~/tailwind.css";

export const meta: MetaFunction = () => [
  { title: "Atsushi Hatakeyama" },
  {
    name: "description",
    content: "Site showing off blog and work by Atsushi Hatakeyama",
  },
];

export default function App() {
  const navigate = useNavigate();

  const actions = [
    // Navigation
    {
      id: "home",
      name: "Home",
      section: "navigation",
      shortcut: ["h"],
      keywords: "home",
      perform: () => navigate("/"),
    },
    {
      id: "about",
      name: "About",
      section: "navigation",
      shortcut: ["a"],
      keywords: "about, contact",
      perform: () => navigate("/about"),
    },
    // Utilities
    {
      id: "dark-theme",
      name: "Dark theme",
      section: "utilities",
      shortcut: ["d"],
      keywords: "dark, theme, mode",
      perform: () => {},
    },
    {
      id: "light-theme",
      name: "Light theme",
      section: "utilities",
      shortcut: ["l"],
      keywords: "light, theme, mode",
      perform: () => {},
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CommandBar actions={actions}>
          <Layout>
            <Outlet />
          </Layout>
        </CommandBar>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
