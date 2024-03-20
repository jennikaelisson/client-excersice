import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
        <li><LogoutButton /></li>
      </ul>
    </nav>
  );
};
