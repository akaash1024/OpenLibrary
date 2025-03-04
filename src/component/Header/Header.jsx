import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../../AuthContextStore";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="container">
        <div className="logo-brand">
          <NavLink to="/"><h1>OpenLibrary</h1></NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/book">Book</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {isLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
