"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
const Links = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Корзина",
    href: "/basket",
  },
  {
    name: "Любимые",
    href: "/favorite",
  },
  {
    name: "Все книги",
    href: "/all-books",
  },
];
const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}></div>

          <div className={scss.nav}>
            {Links.map((item, index) => (
              <div className={scss.nav_text} key={index}>
                <ul key={index}>
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
