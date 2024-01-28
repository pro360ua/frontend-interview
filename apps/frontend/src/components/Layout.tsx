import { Outlet, Link } from "react-router-dom";

import styles from "./Layout.module.scss";

const links = [
  { to: "/", label: "Home" },
  { to: "/users", label: "Users" },
];

const Layout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.routePage}>
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
