import React, { useState } from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { usePathname } from "next/navigation";

const BurgerMenu = () => {
  const pathname = usePathname();
  const { isOpenBurgerMenu, setIsOpenBurgerMenu, links } = useHeaderStore();
  const [activeLang, setActiveLang] = useState("EN");

  const handleLangClick = (lang: string) => {
    setActiveLang(lang);
  };

  return (
    <>
      <div
        className={
          isOpenBurgerMenu
            ? `${scss.BurgerMenu} ${scss.active}`
            : `${scss.BurgerMenu}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={scss.content}>
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    className={
                      pathname === item.href
                        ? `${scss.link} ${scss.active}`
                        : `${scss.link}`
                    }
                    href={item.href}
                    onClick={() => setIsOpenBurgerMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={scss.translate}>
            <a
              href="#"
              className={activeLang === "EN" ? scss.active : ""}
              onClick={() => handleLangClick("EN")}
            >
              EN
            </a>
            <a
              href="#"
              className={activeLang === "RU" ? scss.active : ""}
              onClick={() => handleLangClick("RU")}
            >
              RU
            </a>
            <a
              href="#"
              className={activeLang === "KG" ? scss.active : ""}
              onClick={() => handleLangClick("KG")}
            >
              KG
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
