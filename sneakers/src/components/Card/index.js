import styles from "./Card.module.scss";

function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/unliked.svg' alt='Unliked' />
			</div>
			<img width={133} height={112} src={props.imageUrl} alt='' />
			<h5>{props.title}</h5>
			<div className='d-flex justify-between'>
				<div className='d-flex flex-column'>
					<span className='text-uppercase'>Price:</span>
					<b>{props.price}</b>
				</div>
				<button onClick={props.onClick}>
					<img width={32} height={32} src='/img/btn.svg' alt='Plus' />
				</button>
			</div>
		</div>
	)
}

export default Card
