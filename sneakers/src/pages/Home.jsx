import Card from '../components/Card'

function Home({
	onChangeSearchInput,
	searchValue,
	setSearchValue,
	items,
	onAddToCart,
	onAddToFavorites,
	onRemoveFromFavorites,
	onRemoveFromCart
}) {
	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-30'>
				<h1>All sneakers</h1>
				<div className='search-block p-15 align-center'>
					<img src='/img/search.svg' alt='Search' className='mr-15' />
					<input
						onChange={onChangeSearchInput}
						value={searchValue}
						placeholder='Search...'
					/>
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							width={22}
							height={22}
							src='/img/delete.svg'
							alt='Delete'
							className='deleteSearchBtn cu-p'
						/>
					)}
				</div>
			</div>
			<div className='d-flex flex-wrap'>
				{items
					.filter((item) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((item, index) => (
						<Card
							key={index}
							id={item.id}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							clickOnFavorite={(obj) => onAddToFavorites(obj)}
							clickOnPlus={(obj) => onAddToCart(obj)}
							clickOnChecked={(id) => onRemoveFromCart(id)}
							clickOnFavorited={(id) => onRemoveFromFavorites(id)}
						/>
					))}
			</div>
		</div>
	)
}

export default Home
