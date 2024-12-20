'use client'
import { products } from '@/const/Products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import emtyPhoto from '../../../assets/images/emtyPhoto.png'
import scss from './Menu.module.scss'
const Menu = () => {
	const [activeItem, setActiveItem] = useState('desserts-001')
	const [loading, setLoading] = useState(false)
	console.log('🚀 ~ Menu ~ loading:', loading)
	const items = [
		{ id: 'desserts-001', title: 'Desserts' },
		{ id: 'hot-drinks-002', title: 'Hot Drinks' },
		{ id: 'cold-drinks-003', title: 'Cold Drinks' },
		{ id: 'national-foods-004', title: 'National Foods' },
		{ id: 'eastern-cuisine-005', title: 'Eastern Cuisine' },
		{ id: 'fast-foods-006', title: 'Fast Foods' }
	]

	const [activeProduct, setActiveProduct] = useState<null | string>(null)
	function handleClick(item: string) {
		setActiveProduct(item)
		setActiveItem(item)
	}

	const product = useMemo(
		() => products.find(el => el.id === activeProduct),
		[activeProduct]
	)

	const filterProducts = useMemo(
		() => products.filter(el => el.categoryId === activeItem),
		[activeItem]
	)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	return (
		<div id={scss.menuPage}>
			<div className='container'>
				<div className={scss.menuPage}>
					<div className={scss.menuContent}>
						<ul>
							{items.map((item, index) => (
								<li
									className={activeItem === item.id ? scss.activeLi : ''}
									key={index}
									onClick={() => handleClick(item.id)}
								>
									{item.title}
									<hr />
								</li>
							))}
						</ul>
					</div>
					<div className={scss.menuBlocks}>
						{activeProduct && product && (
							<motion.div
								key={activeProduct}
								initial={{
									opacity: 0,
									y: -10
								}}
								animate={{
									opacity: 1,
									y: 0
								}}
								transition={{ duration: 0.5 }}
							>
								<div className={scss.productContent}>
									<div key={product.id} className={scss.productCardTwo}>
										{product.imageSrc ? (
											<Image
												src={product.imageSrc}
												alt={product.name}
												className={scss.productImage}
												width={329}
												height={187}
											/>
										) : (
											<h1>hello</h1>
										)}
										<div className={scss.produtTextTwo}>
											<div className={scss.iceCreamTwo}>
												<h2>{product.name}</h2>
												<p>{product.description}</p>
											</div>
											<h3>${product.price}</h3>
										</div>
									</div>
									<div className={scss.extras}>
										<h3>Extras</h3>
										<div className={scss.charyBlock}>
											<p>Cherry</p>
											<p>$0.90</p>
										</div>
										<div className={scss.charyBlock}>
											<p>Cherry</p>
											<p>$0.90</p>
										</div>
										<h3>Extras</h3>
										<div className={scss.charyBlock}>
											<p>Cherry</p>
											<p>$0.90</p>
										</div>
										<div className={scss.charyBlock}>
											<p>Cherry</p>
											<p>$0.90</p>
										</div>
									</div>
								</div>
								<h1 className={scss.titleMenu}>{product.name}</h1>
							</motion.div>
						)}
						<div className={scss.productList}>
							{filterProducts.map((el, idx) => (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 * (idx + 1) }}
									onClick={() => {
										setActiveProduct(el.id)
										scrollToTop()
									}}
									key={el.id}
									className={scss.productCard}
								>
									<Image
										onLoad={() => setLoading(true)}
										src={el.imageSrc ? el.imageSrc : emtyPhoto}
										alt={el.name}
										className={scss.productImage}
										width={329}
										height={187}
									/>

									<div className={scss.produtText}>
										<div className={scss.iceCream}>
											<h2>{el.name}</h2>
											<p>{el.description}</p>
										</div>
										<h3>${el.price}</h3>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
				{activeProduct && product && (
					<span onClick={() => setActiveProduct('')} className={scss.closeMenu}>
						X
					</span>
				)}
			</div>
		</div>
	)
}

export default Menu
