'use client' // Добавьте эту строку в начале файла

import { useLanguageStore } from '@/stores/useLanguageStore'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import TextIcon from '../../../assets/icons/AboutUsIcon.png'
import slideImg1 from '../../../assets/images/SliderImg (1).svg'
import slideImg2 from '../../../assets/images/SliderImg (2).svg'
import slideImg3 from '../../../assets/images/SliderImg (3).svg'
import slideImg4 from '../../../assets/images/SliderImg (4).svg'
import slideImg5 from '../../../assets/images/SliderImg (5).svg'
import scss from './BestSeller.module.scss'
interface Slide {
	id: number
	image: StaticImageData
}

const BestSeller: React.FC = () => {
	const slides: Slide[] = [
		{ id: 1, image: slideImg1 },
		{ id: 2, image: slideImg2 },
		{ id: 3, image: slideImg3 },
		{ id: 4, image: slideImg4 },
		{ id: 5, image: slideImg5 }
	]

	const { t } = useLanguageStore()

	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [isAnimating, setIsAnimating] = useState<boolean>(false)

	const nextSlide = (): void => {
		if (!isAnimating) {
			setIsAnimating(true)
			setCurrentIndex(
				(prevIndex: number): number => (prevIndex + 1) % slides.length
			)
		}
	}

	const prevSlide = (): void => {
		if (!isAnimating) {
			setIsAnimating(true)
			setCurrentIndex(
				(prevIndex: number): number =>
					(prevIndex - 1 + slides.length) % slides.length
			)
		}
	}

	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
		// preventDefaultTouchmoveEvent: true,
		trackTouch: true,
		trackMouse: true
	})

	useEffect(() => {
		const timer: NodeJS.Timeout = setTimeout(() => {
			setIsAnimating(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [currentIndex])

	return (
		<section className={scss.BestSeller} {...handlers}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.info}>
						<div className={scss.titleContent}>
							<Image
								className={scss.titleContentImg}
								src={TextIcon}
								alt='Best Seller Icon'
							/>
							<h1 className={scss.TitleContentTitle}>
								{t('Эң мыкты сатуучу', 'Бестселлер', 'Best Seller')}
							</h1>
						</div>
						<div className={scss.InfoContent}>
							<h1 className={scss.InfoContentTitle}>
								{t(
									'Сиз өзүңүзгө гана бронь кыла аласыз',
									'Вы бронируете только для себя',
									'You Only Reserve Exception'
								)}
							</h1>
							<h1 className={scss.InfoContentInfo}>
								{t(
									'Ар бир жай өзүнө гана арналган менюга ээ. Сиздин Cafesioдагы жаңылыктарды көрүңүз жана сиз Cafesio Covent Garden учурун табасыз.',
									'Каждая локация имеет меню, которое создано специально для них. Узнайте, что нового в вашем Cafesio, и вы найдете моменты Covent Garden в Cafesio.',
									'Each location has a menu that is curated just for them. See what is new at your Cafesio and you will find Cafesio Covent Garden moments.'
								)}
							</h1>
						</div>
					</div>

					<div className={scss.sliderContainer}>
						<button className={scss.prevButton} onClick={prevSlide}>
							⟪
						</button>
						<div
							className={`${scss.slider} ${isAnimating ? scss.animate : ''}`}
						>
							<div
								className={scss.slides}
								style={{
									transform: `translateX(-${currentIndex * 50}%)`
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
							⟫
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BestSeller
