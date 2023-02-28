import { useState } from 'react'
import styles from './Card.module.scss'

function Card({ id, title, imageUrl, price, isFavorited = false, clickOnPlus, clickOnFavorite }) {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(isFavorited);

	const handleAddToCart = () => {
		clickOnPlus({id, title, imageUrl, price});
		setIsAdded(!isAdded);
	}
	
	const handleAddToFavorite = () => {
		clickOnFavorite({id, title, imageUrl, price});
		setIsFavorite(!isFavorite);
	}
	
	return (
		<div className={styles.card}>
			<img className={styles.favorite} onClick={handleAddToFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt='Unliked' />
			<img width={133} height={112} src={imageUrl} alt='' />
			<h5>{title}</h5>
			<div className='d-flex justify-between'>
				<div className='d-flex flex-column'>
					<span className='text-uppercase'>Price:</span>
					<b>{price}</b>
				</div>
				<img className={styles.plus} onClick={handleAddToCart} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus' />
			</div>
		</div>
	)
}

export default Card
