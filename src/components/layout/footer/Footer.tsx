import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import scss from "./Footer.module.scss";
import { Link as Scrollhref } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

import { Typography } from "@/UI/Typography/Typography";

const Footer = () => {
  const pathname = usePathname();
  const nav = useRouter();
  const { t } = useLanguageStore();

  const Links = [
    { name: t("Интерьер", "Интерьер", "Interior"), href: "/interior" },
    { name: t("Биз жонундо", "О нас", "About Us"), href: "about-us" },
    { name: t("Меню", "Меню", "Menu"), href: "/menu" },
    { name: t("Контакты", "Контакты", "Contacts"), href: "contacts" },
  ];

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
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Typography
              variant="h3"
              weight="regular"
              fontFamily="playfair_display"
              onClick={() => nav.push("/")}
            >
              {t("Ресторан", "Ресторан", "Restaurant")}
            </Typography> 
          </div>

          <div className={scss.nav}>
            {Links.map((item, index) => (
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

          <div className={scss.social}>
            <a
              href="https://t.me/your-telegram"
              target="_blank"
              className={scss.icon}
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              className={scss.icon}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={scss.divider}></div>

        <div className={scss.copyright}>
          &copy; 2023{" "}
          {t("Motion Study ООО", "Motion Study ООО", "Motion Study LLC")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
