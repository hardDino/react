import Card from '../components/Card'

function Favorites({ items, onAddToFavorites, favoriteItems }) {
	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-30'>
				<h1>My favorites</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{items.map((item, index) => (
					<Card
						key={index}
						favorited={favoriteItems.some(obj => Number(obj.id) === Number(item.id))}
						clickOnFavorite={(obj) => onAddToFavorites(obj)}
						{...item}
					/>
				))}
			</div>
		</div>
	)
}

export default Favorites
