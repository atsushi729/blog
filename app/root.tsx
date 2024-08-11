import {
  Link,
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
import CommandBar from "./components/SearchBar";
import { useActions } from "./hooks/useActions";
import { ThemeProvider, useTheme } from "~/utils/theme-provider";

export const meta: MetaFunction = () => [
  { title: "Atsushi Hatakeyama" },
  {
    name: "description",
    content: "Site showing off blog and work by Atsushi Hatakeyama",
  },
];

export function App() {
  const [theme] = useTheme();
  const actions = useActions();

  return (
    <html lang="en" className={`${theme}`}>
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

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-brown-900 flex items-center justify-center min-h-screen relative">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/public/404-background.png"
            alt="404"
            className="max-w-full h-auto mb-8"
          />
          <Link to="/">Home</Link>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
