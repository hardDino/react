import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'
import Search from './components/Search'
import { useEffect, useState } from 'react'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)

	useEffect(() => {
		fetch('https://63fbcb901ff79e1332947a6c.mockapi.io/items')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				setItems(json)
			})
	}, [])

  const addToCart = (obj) => {
    setCartItems(prev => [ ...prev, obj ]);
  }

	return (
		<div className='wrapper clear'>
			{cartOpened && <Cart items={cartItems} onClickClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex justify-between align-center mb-30'>
					<h1>All sneakers</h1>
					<Search />
				</div>
				<div className='d-flex flex-wrap'>
					{items.map((item) => (
						<Card
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							clickOnFavorite={() => console.log('Click on favorite button')}
							clickOnPlus={(obj) => addToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
