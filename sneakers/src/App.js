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
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// fetch('https://63fbcb901ff79e1332947a6c.mockapi.io/items')
		// 	.then((response) => {
		// 		return response.json()
		// 	})
		// 	.then((json) => {
		// 		setItems(json)
		// 	})
		async function fetchData() {
			const cartResponse = await axios.get('http://localhost:3001/cart')
			const favoritesResponse = await axios.get(
				'http://localhost:3001/favorites'
			)
			const itemsResponse = await axios.get('http://localhost:3001/items')

			setIsLoading(false)

			setCartItems(cartResponse.data)
			setFavoriteItems(favoritesResponse.data)
			setItems(itemsResponse.data)
		}

		fetchData()
	}, [])

	const onAddToCart = async (obj) => {
		try {
			if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
				axios.delete(`http://localhost:3001/cart/${obj.id}`)
				setCartItems((prev) =>
					prev.filter((item) => Number(item.id) !== Number(obj.id))
				)
			} else {
				const { data } = await axios.post('http://localhost:3001/cart', obj)
				setCartItems((prev) => [...prev, data])
			}
		} catch (error) {
			alert('Error')
			console.log(error)
		}
	}

	const onAddToFavorites = async (obj) => {
		try {
			if (favoriteItems.find((item) => item.id === obj.id)) {
				axios.delete(`http://localhost:3001/favorites/${obj.id}`)
				// setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id))
			} else {
				const { data } = await axios.post(
					'http://localhost:3001/favorites',
					obj
				)
				setFavoriteItems((prev) => [...prev, data])
			}
		} catch (error) {
			alert('Error')
			console.log(error)
		}
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
					onClickDelete={(obj) => onAddToCart(obj)}
				/>
			)}
			<Header onClickCart={() => setCartOpened(true)} />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							cartItems={cartItems}
							favoriteItems={favoriteItems}
							onChangeSearchInput={onChangeSearchInput}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							items={items}
							onAddToCart={onAddToCart}
							onAddToFavorites={onAddToFavorites}
							isLoading={isLoading}
						/>
					}
				></Route>
				<Route
					path='/favorites'
					element={
						<Favorites
							items={favoriteItems}
							favoriteItems={favoriteItems}
							onAddToFavorites={onAddToFavorites}
						/>
					}
				></Route>
			</Routes>
		</div>
	)
}

export default App
