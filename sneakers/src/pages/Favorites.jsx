import  Card  from "../components/Card";

function Favorites({ items, onRemoveFromFavorites }) {
	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-30'>
				<h1>My favorites</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{items.map((item, index) => (
					<Card
						key={index}
						id={item.id}
						title={item.title}
						price={item.price}
						imageUrl={item.imageUrl}
						isFavorited={true}
						clickOnFavorited={(id) => onRemoveFromFavorites(id)}
					/>
				))}
			</div>
		</div>
	)
}

export default Favorites
