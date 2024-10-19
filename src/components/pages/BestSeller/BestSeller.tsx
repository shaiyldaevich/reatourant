"use client";

import React, { useState, useEffect } from "react";
import scss from "./BestSeller.module.scss";
import TextIcon from "../../../assets/icons/AboutUsIcon.png";
import Image, { StaticImageData } from "next/image";
import slideImg1 from "../../../assets/images/SliderImg (1).svg";
import slideImg2 from "../../../assets/images/SliderImg (2).svg";
import slideImg3 from "../../../assets/images/SliderImg (3).svg";
import slideImg4 from "../../../assets/images/SliderImg (4).svg";
import slideImg5 from "../../../assets/images/SliderImg (5).svg";

interface Slide {
    id: number;
    image: StaticImageData;
}

const BestSeller: React.FC = () => {
    const slides: Slide[] = [
        { id: 1, image: slideImg1 },
        { id: 2, image: slideImg2 },
        { id: 3, image: slideImg3 },
        { id: 4, image: slideImg4 },
        { id: 5, image: slideImg5 },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const nextSlide = (): void => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex(
                (prevIndex: number): number =>
                    (prevIndex + 1) % (slides.length - 1)
            );
        }
    };

    const prevSlide = (): void => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex(
                (prevIndex: number): number =>
                    (prevIndex - 1 + (slides.length - 1)) % (slides.length - 1)
            );
        }
    };

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <section className={scss.BestSeller}>
            <div className={scss.container}>
                <div className={scss.content}>
                    <div className={scss.info}>
                        <div className={scss.titleContent}>
                            <Image
                                className={scss.titleContentImg}
                                src={TextIcon}
                                alt="Best Seller Icon"
                            />
                            <h1 className={scss.TitleContentTitle}>
                                Best Seller
                            </h1>
                        </div>
                        <div className={scss.InfoContent}>
                            <h1 className={scss.InfoContentTitle}>
                                You Only Reserve Exception
                            </h1>
                            <h1 className={scss.InfoContentInfo}>
                                Each location has a menu that is curated just
                                for them. See what is new at your Cafesio and
                                You will find Cafesio Covent Garden moments.
                            </h1>
                        </div>
                    </div>

                    <div className={scss.sliderContainer}>
                        <button className={scss.prevButton} onClick={prevSlide}>
                            &lt;
                        </button>
                        <div
                            className={`${scss.slider} ${
                                isAnimating ? scss.animate : ""
                            }`}
                        >
                            <div
                                className={scss.slides}
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * 50
                                    }%)`,
                                }}
                            >
                                {slides.map((slide: Slide) => (
                                    <div key={slide.id} className={scss.slide}>
                                        <Image
                                            src={slide.image}
                                            alt={`Slide ${slide.id}`}
                                            className={scss.sliderImg}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className={scss.nextButton} onClick={nextSlide}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestSeller;
