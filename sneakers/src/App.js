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
			.get('https://63fbcb901ff79e1332947a6c.mockapi.io/items')
			.then((response) => {
				setItems(response.data)
			})
		// axios
		// 	.get('https://63fbcb901ff79e1332947a6c.mockapi.io/cart')
		// 	.then((response) => {
		// 		setCartItems(response.data)
		// 	})
		axios
			.get('https://63fbcb901ff79e1332947a6c.mockapi.io/favorites')
			.then((response) => {
				setFavoriteItems(response.data)
			})
	}, [])

	const onAddToCart = /*async*/ (obj) => {
    // try {
      
    // } catch (error) {
      
    // }
		if (cartItems.find((item) => item.id === obj.id)) {
			//axios.delete(`https://63fbcb901ff79e1332947a6c.mockapi.io/cart/${id}`)
			setCartItems((prev) => prev.filter((item) => item.id !== obj.id))
		} else {
			//const {data} = await axios.post('https://63fbcb901ff79e1332947a6c.mockapi.io/cart', obj)
			setCartItems((prev) => [...prev, obj]) //data])
		}
	}

	const onAddToFavorites = async (obj) => {
		try {
			if (favoriteItems.find((item) => item.id === obj.id)) {
				axios.delete(
					`https://63fbcb901ff79e1332947a6c.mockapi.io/favorites/${obj.id}`
				)
				// setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id))
			} else {
				const { data } = await axios.post(
					'https://63fbcb901ff79e1332947a6c.mockapi.io/favorites',
					obj
				)
				setFavoriteItems((prev) => [...prev, data])
			}
		} catch (error) {
			alert('')
		}
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Cart items={cartItems} onClickClose={() => setCartOpened(false)} />
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
							items={items}
							onAddToCart={onAddToCart}
							onAddToFavorites={onAddToFavorites}
						/>
					}
				></Route>
				<Route
					path='/favorites'
					element={
						<Favorites
							items={favoriteItems}
							onAddToFavorites={onAddToFavorites}
						/>
					}
				></Route>
			</Routes>
		</div>
	)
}

export default App
