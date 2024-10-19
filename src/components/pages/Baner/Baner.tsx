import React from "react";
import styles from "./Baner.module.scss";
import IconBannerLeft from "@/assets/icons/IconBannerLeft";
import IconBannerRight from "@/assets/icons/IconBannerRight";
import { FaArrowRight } from "react-icons/fa";
import Location from "@/assets/icons/Location";
import Phone from "@/assets/icons/Phone";
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
          <h3>Delicious</h3>
          <IconBannerRight />
        </div>
        <h1>{text.name}</h1>
        <p>{text.descr}</p>
        <div className={styles.banerButton}>
          <hr className={styles.hrTop} />
          <button>
            Reserve Your Table <FaArrowRight className={styles.arr} />
          </button>
          <hr className={styles.hrBottom} />
        </div>
      </div>
      <div className={styles.mainInformation}>
        <div className={styles.location}>
          <p>Location</p>
          <hr className={styles.locationHr} />
          <Location />
          <h5>{Info.locationInfo}</h5>
        </div>
        <div className={styles.phone}>
          <p>Hotline</p>
          <hr className={styles.phoneHr} />
          <Phone />
          <h5>{Info.phone}</h5>
        </div>
      </div>
      <hr className={styles.BannerHrBotttom} />
    </div>
  );
};

export default Baner;
