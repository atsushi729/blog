import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "~/tailwind.css";
import { Layout } from "./components/Layout";
import CommandBar from "./components/searchBar";
import { useActions } from "./hooks/useActions";

export const meta: MetaFunction = () => [
  { title: "Atsushi Hatakeyama" },
  {
    name: "description",
    content: "Site showing off blog and work by Atsushi Hatakeyama",
  },
];

export default function App() {
  const actions = useActions();

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
