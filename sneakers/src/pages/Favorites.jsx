import  Card  from "../components/Card";

function Favorites({ items, onAddToFavorites}) {
	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-30'>
				<h1>My favorites</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{items.map((item, index) => (
					<Card
						key={index}
						isFavorited={true}
						clickOnFavorite={(obj) => onAddToFavorites(obj)}
						{...item}
					/>
				))}
			</div>
		</div>
	)
}

export default Favorites
