import { NavLink } from "react-router-dom";

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
        {/* <li>
          <NavLink to={"/resume"}>Resume</NavLink>
        </li> */}
       
      </ul>
    </nav>
  );
};
