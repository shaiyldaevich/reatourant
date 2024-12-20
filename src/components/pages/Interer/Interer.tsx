"use client";
import IconBannerLeft from "@/assets/icons/IconBannerLeft";
import IconBannerRight from "@/assets/icons/IconBannerRight";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { Typography } from "@/UI/Typography/Typography";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import interer1 from "../../../assets/images/1.svg";
import interer2 from "../../../assets/images/interer2.png";
import "./Interer.css";
import styles from "./Interer.module.scss";

const Interer = () => {
    const { t } = useLanguageStore();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="interior" className={styles.mainInterer}>
            <div className="container">
                <div className={styles.interer}>
                    <div className={styles.intererText}>
                        <IconBannerLeft />
                        <Typography
                            variant="h2"
                            weight="light"
                            fontFamily="shalimar"
                        >
                            {t(
                                "Заманбап интерьер",
                                "Современный интерьер",
                                "Modern Interior"
                            )}
                        </Typography>

                        <IconBannerRight />
                    </div>
                    <div className={styles.slider}>
                        <Slider {...settings}>
                            <div className={styles.mainImg}>
                                <Image
                                    src={interer1}
                                    alt="Modern interior design 1"
                                />
                            </div>
                            <div className={styles.mainImg}>
                                <Image
                                    src={interer2}
                                    alt="Modern interior design 2"
                                />
                            </div>
                            <div className={styles.mainImg}>
                                <Image
                                    src={interer1}
                                    alt="Modern interior design 3"
                                />
                            </div>
                            <div className={styles.mainImg}>
                                <Image
                                    src={interer2}
                                    alt="Modern interior design 4"
                                />
                            </div>
                            <div className={styles.mainImg}>
                                <Image
                                    src={interer1}
                                    alt="Modern interior design 5"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interer;
