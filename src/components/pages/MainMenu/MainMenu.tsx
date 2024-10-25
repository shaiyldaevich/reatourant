"use client";
import { useState } from "react";
import styles from "./MainMenu.module.scss";
import { Typography } from "@/UI/Typography/Typography";
import IconBannerLeft from "@/assets/icons/IconBannerLeft";
import IconBannerRight from "@/assets/icons/IconBannerRight";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type CategoryType =
  | "Desserts"
  | "Hot Drinks"
  | "Cold Drinks"
  | "National Foods"
  | "Eastern cuisine"
  | "Fast foods";

const MainMenu: React.FC = () => {
  const textMenu = [
    { name: "Beer Brewery", descr: "Cold Drinks", price: 12 },
    { name: "Burger&Pasta", descr: "Fast foods", price: 24 },
    { name: "Coffe", descr: "Hot Drinks", price: 10 },
    { name: "Coca cola", descr: "Cold Drinks", price: 11 },
    { name: "Hincali", descr: "National Foods", price: 32 },
    { name: "Halva", descr: "Eastern cuisine", price: 38 },
    { name: "Ponchik", descr: "Desserts", price: 20 },
  ];

  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(
    null
  );

  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const filteredMenu = activeCategory
    ? textMenu.filter((item) => item.descr === activeCategory)
    : textMenu;

  return (
    <div className={styles.mainMenu}>
      <div className="container">
        <div className={styles.mainText}>
          <div className={styles.menuText}>
            <IconBannerLeft />
            <Typography variant="h2" weight="light" fontFamily="shalimar">
              Main Menu
            </Typography>
            <IconBannerRight />
          </div>
          <Typography
            variant="h2"
            weight="regular"
            fontFamily="playfair_display"
          >
            Exceptional Quality. <br /> Delightfully Delicious
          </Typography>
        </div>

        <div className={styles.mainMenu}>
          <div className={styles.menuButton}>
            {[
              "Desserts",
              "Hot Drinks",
              "Cold Drinks",
              "National Foods",
              "Eastern cuisine",
              "Fast foods",
            ].map((category, index) => (
              <div
                key={index}
                className={`${styles[`mainBtn${index + 1}`]} ${
                  activeCategory === category ? styles.active : ""
                }`}
                onClick={() => handleCategoryClick(category as CategoryType)}
              >
                <Typography
                  variant="h5"
                  weight="regular"
                  fontFamily="playfair_display"
                >
                  {category}
                </Typography>
                <hr className={styles.hrBtn} />
              </div>
            ))}
          </div>

          <div className={styles.menuInfo}>
            {filteredMenu.map((el, index) => (
              <div key={index} className={styles.info}>
                <div className={styles.text}>
                  <Typography
                    variant="bodyL"
                    weight="regular"
                    fontFamily="playfair_display"
                  >
                    {el.name}
                  </Typography>
                  <Typography
                    variant="h3"
                    weight="regular"
                    fontFamily="playfair_display"
                  >
                    .....................................................................................
                  </Typography>
                  <Typography
                    variant="h5"
                    weight="regular"
                    fontFamily="playfair_display"
                  >
                    ${el.price}
                  </Typography>
                </div>
                <div className={styles.orderNow}>
                  <Typography
                    variant="bodyX"
                    weight="light"
                    fontFamily="spartan"
                  >
                    {el.descr}
                  </Typography>
                  <Typography
                    variant="bodyXS"
                    weight="regular"
                    fontFamily="playfair_display"
                  >
                    Order Now
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Button}>
          <hr className={styles.hrTop} />
          <Link href={"/menu"}>
            <button>
              View Full menu
              <FaArrowRight className={styles.arr} />
            </button>
          </Link>
          <hr className={styles.hrBottom} />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
