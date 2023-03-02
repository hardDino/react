import Card from '../components/Card'

function Home({
	items,
	cartItems,
	favoriteItems,
	onChangeSearchInput,
	searchValue,
	setSearchValue,
	onAddToCart,
	onAddToFavorites,
	isLoading,
}) {
	const renderItems = () => {
		const filtredItems = items && items.filter((item) =>
			item.title.toLowerCase().includes(searchValue.toLowerCase())
		)

		return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
			<Card
				key={index}
				clickOnFavorite={(obj) => onAddToFavorites(obj)}
				clickOnPlus={(obj) => onAddToCart(obj)}
				added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
				favorited={favoriteItems.some(
					(obj) => Number(obj.id) === Number(item.id)
				)}
				loading={isLoading}
				{...item}
			/>
		))
	}

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
			<div className='d-flex flex-wrap'>{renderItems()}</div>
		</div>
	)
}

export default Home
