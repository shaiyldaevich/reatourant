import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"; // Подключаем иконки для соцсетей
import scss from "./Footer.module.scss";
const Links = [
  { name: "Interior", href: "/interior" },
  { name: "About Us", href: "/about-us" },
  { name: "Menu", href: "/menu" },
  { name: "Contacts", href: "/contacts" },
];
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1>Restaurant</h1>
          </div>

          <div className={scss.nav}>
            {Links.map((item, index) => (
              <ul key={index}>
                <li>
                  <Link href={item.href}>{item.name}</Link>
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

        <div className={scss.copyright}>&copy; 2023 Motion Study LLC</div>
      </div>
    </footer>
  );
};

export default Footer;
