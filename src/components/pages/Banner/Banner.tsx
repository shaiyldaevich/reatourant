import React from "react";
import styles from "./Banner.module.scss";
import { FaArrowRight } from "react-icons/fa";
import IconBannerLeft from "@/assets/icons/IconBannerLeft";
import IconBannerRight from "@/assets/icons/IconBannerRight";
import Location from "@/assets/icons/Location";
import Phone from "@/assets/icons/Phone";
import { Typography } from "@/UI/Typography/Typography";
interface Text {
  name: string;
  descr: string;
}
interface Info {
  locationInfo: string;
  phone: string;
}

const Baner: React.FC = () => {
  const text: Text = {
    name: "Italian Cuisine",
    descr:
      "Classic steak & delicious with delightfully unexpected twists. The restaurant's sunny decor was inspired by diners.",
  };

  const Info: Info = {
    locationInfo: "Rua da moeda 1g,1200-275,Portugal",
    phone: "+771219900",
  };
  return (
    <div className={styles.mainBaner}>
      <hr className={styles.BannerHrTop} />
      <div className={styles.mainText}>
        <div className={styles.banerText}>
          <IconBannerLeft />
          <Typography variant="h2" weight="light" fontFamily="shalimar">
            Delicious
          </Typography>
          <IconBannerRight />
        </div>
        <Typography variant="h1" weight="regular" fontFamily="playfair_display">{text.name}</Typography>
        <Typography variant="bodyXS" weight="bold" fontFamily="spartan">{text.descr}</Typography>
        <div className={styles.banerButton}>
          <hr className={styles.hrTop} />
          <button>
            Reserve Your Table
            <FaArrowRight className={styles.arr} />
          </button>
          <hr className={styles.hrBottom} />
        </div>
      </div>
      <div className={styles.mainInformation}>
        <div className={styles.location}>
          <Typography variant="bodyX" weight="regular" fontFamily="spartan">Location</Typography>
          <hr className={styles.locationHr} />
          <Location />
          <Typography variant="bodyXM" weight="bold" fontFamily="spartan">{Info.locationInfo}</Typography>
        </div>
        <div className={styles.phone}>
          <Typography variant="bodyX" weight="regular" fontFamily="spartan">Hotline</Typography>
          <hr className={styles.phoneHr} />
          <Phone />
          <Typography variant="bodyXM" weight="bold" fontFamily="spartan">{Info.phone}</Typography>
        </div>
      </div>
      <hr className={styles.BannerHrBotttom} />
    </div>
  );
};

export default Baner;
