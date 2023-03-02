import React from 'react'

import AppContext from '../context'

import Card from '../components/Card'

function Home({ onChangeSearchInput, searchValue, setSearchValue, isLoading }) {
	const { items } =
		React.useContext(AppContext)

	const renderItems = () => {
		const filterItems =
			items &&
			items.filter((item) =>
				item.title.toLowerCase().includes(searchValue.toLowerCase())
			)

		return (isLoading ? [...Array(8)] : filterItems).map((item, index) => (
			<Card
				key={index}
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
