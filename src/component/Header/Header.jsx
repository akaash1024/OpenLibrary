import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="container">
        <div className="logo-brand">
          <NavLink to="/">OpenLibrary</NavLink>
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
              <NavLink to="/book">Book</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {true ? (
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
