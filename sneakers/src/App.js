import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Header from './components/Header'
import Cart from './components/Cart'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favoriteItems, setFavoriteItems] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpened, setCartOpened] = useState(false)

	useEffect(() => {
		// fetch('https://63fbcb901ff79e1332947a6c.mockapi.io/items')
		// 	.then((response) => {
		// 		return response.json()
		// 	})
		// 	.then((json) => {
		// 		setItems(json)
		// 	})

		axios
			//.get('https://63fbcb901ff79e1332947a6c.mockapi.io/items')
			.get('https://bwih7lqpds.api.quickmocker.com/items')
			.then((response) => {
				setItems(response.data)
			})
		axios
			.get('https://63fbcb901ff79e1332947a6c.mockapi.io/cart')
			.then((response) => {
				setCartItems(response.data)
			})
		axios
			.get('https://63fbcb901ff79e1332947a6c.mockapi.io/favorites')
			.then((response) => {
				setFavoriteItems(response.data)
			})
	}, [])

	const onAddToCart = (obj) => {
		axios.post('https://63fbcb901ff79e1332947a6c.mockapi.io/cart', obj)
		setCartItems((prev) => [...prev, obj])
	}

	const onAddToFavorites = (obj) => {
		axios.post('https://63fbcb901ff79e1332947a6c.mockapi.io/favorites', obj)
		setFavoriteItems((prev) => [...prev, obj])
	}

	const onRemoveFromFavorites = (id) => {
		axios.delete(`https://63fbcb901ff79e1332947a6c.mockapi.io/favorites/${id}`)
		setFavoriteItems((prev) => prev.filter((item) => item.id !== id))
	}

	const onRemoveFromCart = (id) => {
		axios.delete(`https://63fbcb901ff79e1332947a6c.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter((item) => item.id !== id))
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Cart
					items={cartItems}
					onClickClose={() => setCartOpened(false)}
					onRemoveFromCart={onRemoveFromCart}
				/>
			)}
			<Header onClickCart={() => setCartOpened(true)} />
			<Routes>
				<Route
					path='/'
					exact='true'
					element={
						<Home
							onChangeSearchInput={onChangeSearchInput}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							items={items}
							onAddToCart={onAddToCart}
							onAddToFavorites={onAddToFavorites}
							onRemoveFromFavorites={onRemoveFromFavorites}
							onRemoveFromCart={onRemoveFromCart}
						/>
					}
				></Route>
				<Route
					path='/favorites'
					exact='true'
					element={
						<Favorites
							items={favoriteItems}
							onRemoveFromFavorites={onRemoveFromFavorites}
						/>
					}
				></Route>
			</Routes>
		</div>
	)
}

export default App
