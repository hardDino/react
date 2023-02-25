import { useState } from 'react'
import styles from './Card.module.scss'

function Card(props) {
	const [isAdded, setIsAdded] = useState(false);

	const handleClick = () => {
		setIsAdded(!isAdded);
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={props.addToFavorite}>
				<img src='/img/unliked.svg' alt='Unliked' />
			</div>
			<img width={133} height={112} src={props.imageUrl} alt='' />
			<h5>{props.title}</h5>
			<div className='d-flex justify-between'>
				<div className='d-flex flex-column'>
					<span className='text-uppercase'>Price:</span>
					<b>{props.price}</b>
				</div>
				<img className={styles.plus} onClick={handleClick} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus' />
			</div>
		</div>
	)
}

export default Card
