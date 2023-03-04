import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Orders } from './pages/Orders'
import Header from './components/Header'
import Cart from './components/Cart'
import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import AppContext from './context'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favoriteItems, setFavoriteItems] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
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
			if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
				axios.delete(`http://localhost:3001/favorites/${obj.id}`)
				setFavoriteItems((prev) =>
					prev.filter((item) => Number(item.id) !== Number(obj.id))
				)
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

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id))
	}

	const isItemFavorite = (id) => {
		return favoriteItems.some((obj) => Number(obj.id) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{
				items,
				cartItems,
				favoriteItems,
				onAddToCart,
				onAddToFavorites,
				isItemAdded,
				isItemFavorite,
				setCartOpened,
				setCartItems
			}}
		>
			<div className='wrapper clear'>
				{cartOpened && (
					<Cart items={cartItems} onClickDelete={(obj) => onAddToCart(obj)} />
				)}
				<Header onClickCart={() => setCartOpened(true)} />
				<Routes>
					<Route
						path='/'
						element={
							<Home
								onChangeSearchInput={onChangeSearchInput}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								isLoading={isLoading}
							/>
						}
					></Route>
					<Route path='/favorites' element={<Favorites />}></Route>
					<Route path='/orders' element={<Orders />}></Route>
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App
