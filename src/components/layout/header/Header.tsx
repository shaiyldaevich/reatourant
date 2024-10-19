"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BurgerButton from "@/UI/burgerButton/BurgerButton";
import BurgerMenu from "@/UI/burgerMenu/BurgerMenu";

const Links = [
  { name: "Interior", href: "/interior" },
  { name: "About Us", href: "/about-us" },
  { name: "Menu", href: "/menu" },
  { name: "Contacts", href: "/contacts" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const nav = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1 onClick={() => nav.push("/")}>Restaurant</h1>
          </div>

          {isMobile ? (
            <>
              <BurgerButton />
              <BurgerMenu />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                {Links.map((item, index) => (
                  <ul key={index}>
                    <li>
                      <Link href={item.href}>{item.name}</Link>
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
