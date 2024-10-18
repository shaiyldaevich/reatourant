import React from "react";
import scss from "./AboutUs.module.scss";
import Image from "next/image";
// import img1 from "../../../assets/images/AboutUs (1).svg";
// import img2 from "../../../assets/images/AboutUs (2).svg";
import TextIcon from "../../../assets/icons/AboutUsIcon.png";

const AboutUs = () => {
    return (
        <section className={scss.AboutUs}>
            <div className={scss.container}>
                <div className={scss.content}>
                    <div className={scss.titleContent}>
                        <Image
                            width={55}
                            height={20}
                            quality={70}
                            src={TextIcon}
                            alt=""
                        />
                        <h1 className={scss.TitleContentTitle}> About Us</h1>
                    </div>
                    <div className={scss.InfoContent}>
                        <h1 className={scss.InfoContentTitle}>
                            A Journey Throught Cafesio Flavors
                        </h1>
                        <h1 className={scss.InfoContentInfo}>
                            Try dishes that will open up new tastes for you and
                            delight your eyes with their appearance. Here you
                            will find a cozy atmosphere, excellent service and
                            attention to each guest. Book a table now and enjoy
                            a unique experience of taste discovery!
                        </h1>
                    </div>
                    <div className={scss.ImgContent}></div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
