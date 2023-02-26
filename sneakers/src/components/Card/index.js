import { useState } from 'react'
import styles from './Card.module.scss'

function Card({ title, imageUrl, price, clickOnPlus }) {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	
	const handleCart = () => {
		clickOnPlus({title, imageUrl, price});
		setIsAdded(!isAdded);
	}

	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
	}
	
	return (
		<div className={styles.card}>
			<img className={styles.favorite} onClick={handleFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt='Unliked' />
			<img width={133} height={112} src={imageUrl} alt='' />
			<h5>{title}</h5>
			<div className='d-flex justify-between'>
				<div className='d-flex flex-column'>
					<span className='text-uppercase'>Price:</span>
					<b>{price}</b>
				</div>
				<img className={styles.plus} onClick={handleCart} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus' />
			</div>
		</div>
	)
}

export default Card
