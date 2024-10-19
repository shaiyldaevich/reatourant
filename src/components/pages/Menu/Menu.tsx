'use client'
import { useState } from 'react'
import scss from './Menu.module.scss'

const Menu = () => {
	const [activeItem, setActiveItem] = useState(null)
	const items = [
		'Desserts',
		'Hot Drinks',
		'Cold Drinks',
		'National Foods',
		'Eastern cuisine',
		'Fast foods'
	]
	function handleClick(item: string | any) {
		setActiveItem(item)
	}
	const products = [
		{
			id: 1,
			image:
				'https://s3-alpha-sig.figma.com/img/d524/3b1a/d0d54568341045c1e0f2b7d576ea4793?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVr84UbRTsPhUK3wpTUc-FfKEpCOp8SKNCtRgbN~5Nn0aYnJ6kQXfd5xWDtUYXvlJ8KLslcRNjXNOpP7A980aE6QqClo0tUnnt~BN4RKG~8g7Op1ZsW1kINyGXh7BxMrhuad-kPwlGpgGqM1NcB4nmWVBHzMDRK3O4qVQPz5xFxOipnPpAeVMhCqpEYKRp7PM5q5CjMw7s-U4AXRLApGQLy8Zbos6cushSSdMlxSD4dQSTebdBkH3tDkevBNnoSj4z~NS72R5t3rZdneht0rTJ3bpmtOfou1esCAD~38TzymGOCSl~uGlLQyRUZB~B8Hcr0wWxizMoy9FHbcgdJY-Q__',
			title: 'Ice Cream',
			description: 'soda,cream,milk,sugar',
			price: '$9.11'
		},
		{
			id: 2,
			image:
				'https://s3-alpha-sig.figma.com/img/27ce/6bfd/83bb0d57e316c33e2a65268484b1241e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NacoRUwGy-YIWc1yg6Uend-Rnn1uQtLljc4kx9b9a8noeR11Ft9nvHPh7XTQq1XeFs14I926qLfGIVoH9j6F9oZWNPTey4Y6eIbP-50Yi1NTkNLv0Ii3UFL54lihoPKbTpWB3xtYRgKIxa3-G0XSgG35GSsShJXhqa6Y8AXaMY-d~rIJvYqGPKzE6dLV3xt1jRB7wadEXWD9p-Jkc07LHxzLR795ohOKP5kFfgO6jaKt1c8A2tpiB2xAPTfX7T9D8pgkDiUMtEeCuEzQnG7nf8oWoIF6~7rLs1ni-mt11uXqk5Nt7ieG8QTBklgXBdAZIKdFPzbtG~y81X8USwdLPQ__',
			title: 'Ice Cream',
			description: 'soda,cream,milk,sugar',
			price: '$9.11'
		},
		{
			id: 3,
			image:
				'https://s3-alpha-sig.figma.com/img/3c5f/47e2/48dac3f1de8441d08a1d8517f818f0c9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vv9hNz3LWzX0cJcuVBrS5AhJGlGnyBjW4IbFZA6QGKx3jyFhcyVDsB-BdaeCuRtyxNilIRolXJZzPAobAdE~jCX1zjcfxQldBtioTfSBX9ShDLX6pex8Nz2e3JEqLZr5g~apsp5E4jdJONc~9oHVGmhRh9a2fUSrBfSTR3KFhh5h5ccFSCE3CW9eKUOjsfoiBL-~lda0gvQcJ~fyGFZidFcpnDrEsirixaJHlgHfuDsF586BQz9wh-oep-d1jLBFfOpRlO06VJTTsR1I5wSxA-CjA3M798goHNXTRoQqHckQN0INfMjPz12VXAsGQ8drBt4gyeQXoOz6aYroHDqrHw__',
			title: 'Ice Cream',
			description: 'soda,cream,milk,sugar',
			price: '$9.11'
		},
		{
			id: 4,
			image:
				'https://s3-alpha-sig.figma.com/img/ccbd/f1fa/e2f1c28abfedb4fabf3906f409465d5d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UnaS6h95HYNSoSw5rLfnW1Zcc32jjqxt-Tk9Vn74BGrwivEiy04JiUPqBZBcupzmfAA8PUUzUFdJ5eDNhOb391iJMrPnHhmKhMu63iNkDF2w-g9NbEerjXAR9AQ2013cFDMzHQcqxRMN-5r~4Vjk0zg0NIl3Xa8yp6zz0gEtfaWwsQVA-xuGE0vkMyN1mj19jxs68E9AxCAZ~5ywBxSyooEsOKA0z5pL4sAp7Oys9OM3wH5Pfe1lhXIRJAqL5jPRSGI5-CcGjEU89xqb1ZdbLsqxTCbqvp3vb9s5t8OQQWnhnLuzfZ7KMC7H0Ii6rBMiUZQle9N-Gkz9NnBxpJyC0w__',
			title: 'Ice Cream',
			description: 'soda,cream,milk,sugar',
			price: '$9.11'
		},
		{
			id: 5,
			image:
				'https://s3-alpha-sig.figma.com/img/a21f/b0b0/57be6e88ae3663273b5151109dc6a44a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wb2hzbWqTT6k37ITR2zh3gp-Kytn5RUhYvRNznlq9PMeWaW8Xp-W6rHKprlzZphEu9CZtDTLEy0TVeC3Jz1IH3CZp-NRMXHSk8aTmbIGvC8z0UOeMualRNIAeJRkvjN-wTmaajD77VfGcfunN3qmURkcJVSRRTli5rB81Q3iLCZ1JB7YJW~-0rDs72~jE8UBJdzDPxgqgTuyhCmpa3QeKMRMwI4oh8kg8v0vjlumHy6JZSrJ80tdiE9GhQ42WcAhPTNeEUJGGvgMLU0~bTmnD4xsy85SAmoqpzmFZL16Jb8EzGB1S1ICnP-laC~uW26-A83mh9oy55SJUhTsboGAUg__',
			title: 'Ice Cream',
			description: 'soda,cream,milk,sugar',
			price: '$9.11'
		},
		{
			id: 6,
			image:
				'https://s3-alpha-sig.figma.com/img/e8da/4c3a/b44f0f81acd9f156edfec87b73fb4071?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hydUx-mpKh7SFVm5UVZ0QYgmo85nNdRVqr8cNaZ35tMtd2f7ylKSv~cZqpoMAHUAF2DHfVLiJbqaGnRgiC6GuALwMTGuwkSofMTy4ArvnphrafvT1-mKCec2ls8Qs18SK1kUQFWnjMkM1~JxOL4V20v5pG3qUrTQZbgXUEKk3K3XgXU~hPv3KdbrTMD5EjhbtsCTIylxUMkvB5HDMQmtSn525f3nA-cex2Vo0txNxskTeKxGepGD6BelfKe5UlzTa1kCheESklus-wicgvmCqoKNrw8Jh4iLY0Vv9pido9EBBYBjPu4riyJ8OkfqUHRufXH-Q-yPQbx-XA5X2hsM2w__',
			title: 'Ice Cream',
			description: 'soda,cream,milk,sugar',
			price: '$9.11'
		}
	]
	return (
		<div id={scss.menuPage}>
			<div className='container'>
				<div className={scss.menuPage}>
					<div className={scss.menuContent}>
						<ul>
							{items.map((item, index) => (
								<li
									className={activeItem === item ? scss.activeLi : ''}
									key={index}
									onClick={() => handleClick(item)}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className={scss.menuBlocks}>
						<div className={scss.productList}>
							{products.map(el => (
								<div key={el.id} className={scss.productCard}>
									<img
										src={el.image}
										alt={el.title}
										className={scss.productImage}
									/>
									<div className={scss.produtText}>
										<div className={scss.iceCream}>
											<h2>{el.title}</h2>
											<p>{el.description}</p>
										</div>
										<h3>{el.price}</h3>
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

export default Menu
