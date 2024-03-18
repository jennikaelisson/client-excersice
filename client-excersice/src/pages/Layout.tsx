import { Navigation } from "../components/Navigation";

import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";
import LoginButton from "../components/LoginButton";
import { LoginStart } from "../components/LoginStart";
import LogoutButton from "../components/LogoutButton";



export const Layout = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
      }
  return (
    <>     {isAuthenticated ? (<>
      <Navigation />
      <header className="row">
      headedr <p>{user?.email}, {user?.sub}, {user?.email_verified}</p>
        </header>
      <main className="row">
        <Outlet />
      </main>
      <footer className="row">
      footer
      </footer>
        <LogoutButton /> </>
       ) : ( <>
        <LoginStart />
        <LoginButton />
      </>
    )}
    </>
  );
};
