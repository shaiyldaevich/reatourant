"use client";
import React from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { usePathname, useRouter } from "next/navigation";
import { Link as Scrollhref } from "react-scroll";
import { useLanguageStore } from "@/stores/useLanguageStore";

const BurgerMenu = () => {
  const pathname = usePathname();
  const { isOpenBurgerMenu, setIsOpenBurgerMenu, links } = useHeaderStore();
  const { language, setLanguage, t } = useLanguageStore();
  const nav = useRouter();

  const handleLangClick = (lang: "en" | "ru" | "ky") => {
    setLanguage(lang);
  };

  const handleNavigation = (href: string) => {
    if (pathname === "/menu" && href !== "/menu") {
      nav.push(`/?section=${href.replace("/", "")}`);
    } else if (href === "/menu") {
      nav.push(href);
    } else {
      const section = href.replace("/", "");
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
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
                  {item.href === "/menu" ? (
                    <Link
                      className={
                        pathname === item.href
                          ? `${scss.link} ${scss.active}`
                          : `${scss.link}`
                      }
                      onClick={() => setIsOpenBurgerMenu(false)}
                      href={item.href}
                    >
                      {t(item.name, item.name, item.name)}
                    </Link>
                  ) : (
                    <Scrollhref
                      className={
                        pathname === item.href
                          ? `${scss.link} ${scss.active}`
                          : `${scss.link}`
                      }
                      href={item.href}
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        handleNavigation(item.href);
                        setIsOpenBurgerMenu(false);
                      }}
                    >
                      {t(item.name, item.name, item.name)}
                    </Scrollhref>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className={scss.translate}>
            <a
              href="#"
              className={language === "en" ? scss.active : ""}
              onClick={() => handleLangClick("en")}
            >
              EN
            </a>
            <a
              href="#"
              className={language === "ru" ? scss.active : ""}
              onClick={() => handleLangClick("ru")}
            >
              RU
            </a>
            <a
              href="#"
              className={language === "ky" ? scss.active : ""}
              onClick={() => handleLangClick("ky")}
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
