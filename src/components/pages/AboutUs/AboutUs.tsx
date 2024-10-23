"use client";
import React from "react";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
import img1 from "../../../assets/images/AboutUs (1).svg";
import img2 from "../../../assets/images/AboutUs (2).svg";
import TextIcon from "../../../assets/icons/AboutUsIcon.png";
import { Typography } from "@/UI/Typography/Typography";
import { useLanguageStore } from "@/stores/useLanguageStore";

const AboutUs = () => {
  const { t } = useLanguageStore();

  return (
    <section id="about-us" className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.titleContent}>
            <Image
              className={scss.titleContentImg}
              quality={100}
              src={TextIcon}
              alt="asd"
            />
            <Typography
              variant="h2"
              weight="light"
              fontFamily="Shalimar"
              className={scss.TitleContentTitle}
            >
              {t("Биз жонундо", "О нас", "About Us")}
            </Typography>{" "}
          </div>
          <div className={scss.InfoContent}>
            <Typography
              variant="h2"
              weight="regular"
              fontFamily="playfair_display"
              className={scss.InfoContentTitle}
            >
              {t(
                "Cafesio даамдарына саякат",
                "Путешествие сквозь вкусы Cafesio",
                "A Journey Through Cafesio Flavors"
              )}
            </Typography>
            <Typography
              variant="bodyXS"
              weight="light"
              fontFamily="spartan"
              className={scss.InfoContentInfo}
            >
              {t(
                "Тамактардын жаңы даамдарын ачып, сырткы келбети менен кубаныңыз. Бул жерде сиз жылуу атмосфера, мыкты тейлөө жана ар бир конокко көңүл бурууну таба аласыз. Азыр столду брондоп, даамдуу ачылыштардын уникалдуу тажрыйбасынан ырахат алыңыз!",
                "Попробуйте блюда, которые откроют для вас новые вкусы и порадуют своим внешним видом. Здесь вас ждет уютная атмосфера, превосходный сервис и внимание к каждому гостю. Забронируйте столик прямо сейчас и насладитесь уникальным опытом открытия вкусов!",
                "Try dishes that will open up new tastes for you and delight your eyes with their appearance. Here you will find a cozy atmosphere, excellent service and attention to each guest. Book a table now and enjoy a unique experience of taste discovery!"
              )}
            </Typography>
          </div>
          <div className={scss.ImgContent}>
            <Image
              quality={100}
              src={img1}
              className={scss.ImgContentImg}
              alt="img"
            />
            <Image
              quality={100}
              src={img2}
              className={scss.ImgContentImg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
