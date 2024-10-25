"use client";
import { CiSearch } from "react-icons/ci";
import scss from "./Header.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BurgerButton from "@/UI/burgerButton/BurgerButton";
import BurgerMenu from "@/UI/burgerMenu/BurgerMenu";
import { Link as Scrollhref } from "react-scroll";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Typography } from "@/UI/Typography/Typography";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const nav = useRouter();
  const pathname = usePathname();
  const { t, setLanguage, language } = useLanguageStore();

  const hrefs = [
    { name: t("Интерьер", "Интерьер", "Interior"), href: "interior" },
    { name: t("Биз жонундо", "О нас", "About Us"), href: "about-us" },
    { name: t("Меню", "Меню", "Menu"), href: "/menu" },
    { name: t("Контакты", "Контакты", "Contacts"), href: "contacts" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ky" | "ru" | "en";
    setLanguage(selectedLanguage);
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Scrollhref
              activeClass="active"
              to={"home"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography
                variant="h3"
                weight="regular"
                fontFamily="playfair_display"
              >
                {t("Ресторан", "Ресторан", "Restaurant")}
              </Typography>
            </Scrollhref>
          </div>

          {isMobile ? (
            <>
              <BurgerButton />
              <BurgerMenu />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                {hrefs.map((item, index) => (
                  <ul key={index}>
                    <li>
                      {item.href === "/menu" ? (
                        <Link href={item.href}>{item.name}</Link>
                      ) : (
                        <Scrollhref
                          activeClass="active"
                          to={item.href}
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          onClick={() => handleNavigation(item.href)}
                        >
                          {item.name}
                        </Scrollhref>
                      )}
                    </li>
                  </ul>
                ))}
              </div>

              <div className={scss.form}>
                <CiSearch className={scss.searchIcon} />
                <input
                  type="text"
                  placeholder={t("Издөө", "Поиск", "Search")}
                  className={scss.form_field}
                />
              </div>

              <div className={scss.translate}>
                <select onChange={handleLanguageChange} value={language}>
                  <option value="en">
                    <Typography
                      variant="bodyX"
                      weight="regular"
                      fontFamily="playfair_display"
                    >
                      En
                    </Typography>
                  </option>
                  <option value="ru">
                    <Typography
                      variant="bodyX"
                      weight="regular"
                      fontFamily="playfair_display"
                    >
                      Ru
                    </Typography>
                  </option>
                  <option value="ky">
                    <Typography
                      variant="bodyX"
                      weight="regular"
                      fontFamily="playfair_display"
                    >
                      Ky
                    </Typography>
                  </option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
