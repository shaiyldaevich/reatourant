"use client";
import { products } from "@/const/Products";
import { useMemo, useState } from "react";
import scss from "./Menu.module.scss";
import Image from "next/image";

const Menu = () => {
	const [activeItem, setActiveItem] = useState('desserts-001')
	const [loading, setLoading] = useState(false)
	console.log("🚀 ~ Menu ~ loading:", loading)
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
    () => products.find((el) => el.id === activeProduct),
    [ activeProduct]
  );

  const filterProducts = useMemo(
    () => products.filter((el) => el.categoryId === activeItem),
    [ activeItem]
  );

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
								</li>
							))}
						</ul>
					</div>
					<div className={scss.menuBlocks}>
						{activeProduct && product && (
							<div className={scss.productContent}>
								<div key={product.id} className={scss.productCardTwo}>
									<Image
										src={product.imageSrc}
										alt={product.name}
										className={scss.productImage}
									/>
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
						)}
						<div className={scss.productList}>
							{filterProducts.map(el => (
								<div
									onClick={() => setActiveProduct(el.id)}
									key={el.id}
									className={scss.productCard}
								>
									<Image
										onLoad={() => setLoading(true)}
										onClick={scrollToTop}
										src={el.imageSrc}
										alt={el.name}
										className={scss.productImage}
									/>
									<div className={scss.produtText}>
										<div className={scss.iceCream}>
											<h2>{el.name}</h2>
											<p>{el.description}</p>
										</div>
										<h3>${el.price}</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu;
