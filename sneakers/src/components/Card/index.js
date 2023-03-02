import React from 'react'

import AppContext from '../../context'

import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'


function Card({
	id,
	title,
	imageUrl,
	price,
	loading = false,
}) {
	const { isItemAdded, isItemFavorite, onAddToCart, onAddToFavorites } = React.useContext(AppContext)

	const itemProps = { id, title, imageUrl, price }

	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={210}
					height={200}
					viewBox='0 0 210 200'
					backgroundColor='#c7c7c7'
					foregroundColor='#ecebeb'
				>
					<rect x='0' y='15' rx='10' ry='10' width='150' height='90' />
					<rect x='0' y='119' rx='3' ry='3' width='150' height='15' />
					<rect x='0' y='142' rx='3' ry='3' width='90' height='15' />
					<rect x='0' y='175' rx='8' ry='8' width='80' height='24' />
					<rect x='45' y='175' rx='0' ry='0' width='8' height='6' />
					<rect x='118' y='167' rx='8' ry='8' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
					<img
						className={styles.favorite}
						onClick={() => onAddToFavorites(itemProps)}
						src={isItemFavorite(id) ? '/img/liked.svg' : '/img/unliked.svg'}
						alt='Unliked'
					/>
					<img width={133} height={112} src={imageUrl} alt='' />
					<h5>{title}</h5>
					<div className='d-flex justify-between'>
						<div className='d-flex flex-column'>
							<span className='text-uppercase'>Price:</span>
							<b>{price}</b>
						</div>
						<img
							className={styles.plus}
							onClick={() => onAddToCart(itemProps)}
							src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
							alt='Plus'
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default Card
