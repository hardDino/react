import React from 'react'

import AppContext from "../context";

import Card from '../components/Card'


function Favorites() {
	const { favoriteItems, onAddToFavorites } = React.useContext(AppContext)

	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-30'>
				<h1>My favorites</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{favoriteItems.map((item, index) => (
					<Card
						key={index}
						clickOnFavorite={(obj) => onAddToFavorites(obj)}
						{...item}
					/>
				))}
			</div>
		</div>
	)
}

export default Favorites
