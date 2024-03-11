import { Navigation } from "../components/Navigation";

import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";
import LoginButton from "../components/LoginButton";
import { LoginStart } from "../components/LoginStart";
import LogoutButton from "../components/LogoutButton";



export const Layout = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
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
        <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
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
