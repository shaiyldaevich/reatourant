import Link from "next/link";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import scss from "./Footer.module.scss";
import { Link as Scrollhref } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
const Links = [
  { name: "Interior", href: "/interior" },
  { name: "About Us", href: "about-us" },
  { name: "Menu", href: "/menu" },
  { name: "Contacts", href: "contacts" },
];
const Footer = () => {
  const pathname = usePathname();
  const nav = useRouter();
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
            <h1>Restaurant</h1>
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

        <div className={scss.copyright}>&copy; 2023 Motion Study LLC</div>
      </div>
    </footer>
  );
};

export default Footer;
