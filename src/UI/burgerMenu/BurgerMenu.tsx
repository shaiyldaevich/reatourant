import React, { useState } from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { usePathname, useRouter } from "next/navigation";
import { Link as Scrollhref } from "react-scroll";

const hrefs = [
  { name: "Interior", href: "interior" },
  { name: "About Us", href: "about-us" },
  { name: "Menu", href: "/menu" },
  { name: "Contacts", href: "contacts" },
];
const BurgerMenu = () => {
  const pathname = usePathname();
  const { isOpenBurgerMenu, setIsOpenBurgerMenu, links } = useHeaderStore();
  const [activeLang, setActiveLang] = useState("EN");
  const nav = useRouter();

  const handleLangClick = (lang: string) => {
    setActiveLang(lang);
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
                      {item.name}
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
                        handleNavigation(item.href), setIsOpenBurgerMenu(false);
                      }}
                    >
                      {item.name}
                    </Scrollhref>
                  )}
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
