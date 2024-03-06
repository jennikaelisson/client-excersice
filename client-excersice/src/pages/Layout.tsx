import { Navigation } from "../components/Navigation";

import { Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <Navigation />
      <header className="row">
      headedr 
        </header>
      <main className="row">
        <Outlet />
      </main>
      <footer className="row">
      footer
      </footer>
    </>
  );
};
