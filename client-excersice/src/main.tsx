import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
// import App from "./App.tsx";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jowmadvmnatj57rz.eu.auth0.com"
      clientId="GqYTAKDKk3IgVOHZ2fdJsH6pMyYoRrg9"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >    <RouterProvider router={router}></RouterProvider>

      
    </Auth0Provider>
  </React.StrictMode>
);
