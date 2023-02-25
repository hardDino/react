function Card() {
	return (
		<div className='card'>
		<div className='favorite'>
			<img src='/img/unliked.svg' alt='Unliked' />
		</div>
		<img width={133} height={112} src='/img/sneakers/1.jpg' alt='' />
		<p className='cardName'>Мужские Кроссовки Nike Blazer Mid Suede</p>
		<div className='d-flex justify-between'>
			<div className='d-flex flex-column'>
				<span className='cardPrice text-uppercase'>Price:</span>
				<b className='cardPriceValue'>12 999$</b>
			</div>
			<div className='btn'>
				<img src='/img/btn.svg' alt='Plus' />
			</div>
		</div>
	</div>
	)
}

export default Card;