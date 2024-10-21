"use client";
import { CiSearch } from "react-icons/ci";
import scss from "./Header.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BurgerButton from "@/UI/burgerButton/BurgerButton";
import BurgerMenu from "@/UI/burgerMenu/BurgerMenu";
import { Link as Scrollhref } from "react-scroll";
import Link from "next/link";

const hrefs = [
  { name: "Interior", href: "interior" },
  { name: "About Us", href: "about-us" },
  { name: "Menu", href: "/menu" },
  { name: "Contacts", href: "contacts" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const nav = useRouter();
  const pathname = usePathname();

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
              <h1 onClick={() => nav.push("/")}>Restaurant</h1>
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
                  placeholder="Search"
                  className={scss.form_field}
                />
              </div>

              <div className={scss.translate}>
                <select>
                  <option value="English">En</option>
                  <option value="Russian">Ru</option>
                  <option value="Kyrgyz">Ky</option>
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
