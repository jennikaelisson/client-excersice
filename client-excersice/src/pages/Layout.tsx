import { Navigation } from "../components/Navigation";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";
import LoginButton from "../components/LoginButton";
import { LoginStart } from "../components/LoginStart";

export const Layout = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
      }
  return (
    <>     {isAuthenticated ? (<>
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
       ) : ( <>
        <LoginStart />
        <LoginButton />
      </>
    )}
    </>
  );
};
