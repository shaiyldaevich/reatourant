import React from "react";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
import img1 from "../../../assets/images/AboutUs (1).svg";
import img2 from "../../../assets/images/AboutUs (2).svg";
import TextIcon from "../../../assets/icons/AboutUsIcon.png";
import { Typography } from "@/UI/Typography/Typography";

const AboutUs = () => {
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
                            About Us
                        </Typography>{" "}
                    </div>
                    <div className={scss.InfoContent}>
                        <Typography variant="h2" weight="regular" fontFamily="playfair_display" className={scss.InfoContentTitle}>
                            A Journey Throught Cafesio Flavors
                        </Typography>
                        <Typography variant="bodyXS" weight="light" fontFamily="spartan" className={scss.InfoContentInfo}>
                            Try dishes that will open up new tastes for you and
                            delight your eyes with their appearance. Here you
                            will find a cozy atmosphere, excellent service and
                            attention to each guest. Book a table now and enjoy
                            a unique experience of taste discovery!
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
