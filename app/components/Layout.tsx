import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-custom-gradient dark:text-dark-main">
      <Header />
      <main className="w-full max-w-7xl mx-auto flex-1 flex">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
