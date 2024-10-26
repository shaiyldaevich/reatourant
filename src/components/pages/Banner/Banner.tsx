"use client";
import React from "react";
import styles from "./Banner.module.scss";
import { FaArrowRight } from "react-icons/fa";
import IconBannerLeft from "@/assets/icons/IconBannerLeft";
import IconBannerRight from "@/assets/icons/IconBannerRight";
import Location from "@/assets/icons/Location";
import Phone from "@/assets/icons/Phone";
import { Typography } from "@/UI/Typography/Typography";
import { useLanguageStore } from "@/stores/useLanguageStore";

interface Text {
  name: string;
  descr: string;
}

interface Info {
  locationInfo: string;
  phone: string;
}

const Baner: React.FC = () => {
  const { t } = useLanguageStore();

  const text: Text = {
    name: t("Италья ашканасы", "Итальянская кухня", "Italian Cuisine"),
    descr: t(
      "Классикалык стейк жана күтүлбөгөн бурулуштар менен менен даамдуу. Ресторандын күндүзгү декору тамактануучулардан илхам алган.",
      "Классический стейк и вкусно с неожиданными поворотами. Солнечный декор ресторана был вдохновлён обедами.",
      "Classic steak & delicious with delightfully unexpected twists. The restaurant's sunny decor was inspired by diners."
    ),
  };

  const Info: Info = {
    locationInfo: t(
      "Rua da moeda 1g,1200-275,Португалия",
      "Rua da moeda 1g,1200-275,Португалия",
      "Rua da moeda 1g,1200-275,Portugal"
    ),
    phone: "+771219900",
  };

  return (
    <div className={styles.mainBaner}>
      <hr className={styles.BannerHrTop} />
      <div className={styles.mainText}>
        <div className={styles.banerText}>
          <IconBannerLeft />
          <Typography variant="h2" weight="light" fontFamily="shalimar">
            {t("Даамдуу", "Вкусный", "Delicious")}
          </Typography>
          <IconBannerRight />
        </div>
        <Typography variant="h1" weight="regular" fontFamily="playfair_display">
          {text.name}
        </Typography>
        <Typography variant="bodyXS" weight="bold" fontFamily="spartan">
          {text.descr}
        </Typography>
        <div className={styles.banerButton}>
          <hr className={styles.hrTop} />
          <button>
            {t("Заказать столик", "Заказать столик", "Reserve Your Table")}
            <FaArrowRight className={styles.arr} />
          </button>
          <hr className={styles.hrBottom} />
        </div>
      </div>
      <div className={styles.mainInformation}>
        <div className={styles.location}>
          <Typography variant="bodyX" weight="regular" fontFamily="spartan">
            {t("Жайгашкан жери", "Местоположение", "Location")}
          </Typography>
          <hr className={styles.locationHr} />
          <Location />
          <Typography variant="bodyXM" weight="bold" fontFamily="spartan">
            {Info.locationInfo}
          </Typography>
        </div>
        <div className={styles.phone}>
          <Typography variant="bodyX" weight="regular" fontFamily="spartan">
            {t("Ысык линия", "Горячая линия", "Hotline")}
          </Typography>
          <hr className={styles.phoneHr} />
          <Phone />
          <Typography variant="bodyXM" weight="bold" fontFamily="spartan">
            {Info.phone}
          </Typography>
        </div>
      </div>
      <hr className={styles.BannerHrBotttom} />
    </div>
  );
};

export default Baner;
