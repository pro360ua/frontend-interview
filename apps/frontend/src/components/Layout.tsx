import { Outlet, Link } from "react-router-dom";
import { cn } from "@/utils";

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
              <Link
                to={link.to}
                className={cn(
                  "rounded border-2 border-stone-900 bg-stone-200 px-4 py-1 text-stone-900 hover:bg-stone-700 hover:text-stone-200"
                )}
              >
                {link.label}
              </Link>
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
