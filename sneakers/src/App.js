import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'
import Search from './components/Search'

const arr = [
	{ title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg' },
	{ title: 'Мужские Кроссовки Nike Air Max 270', price: 15699, imageUrl: '/img/sneakers/2.jpg' },
	{ title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg' },
	{ title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg' },
]

function App() {
	return (
		<div className='wrapper clear'>
			<Cart />
			<Header />
			<div className='content p-40'>
				<div className='d-flex justify-between align-center mb-30'>
					<h1>All sneakers</h1>
					<Search />
				</div>
				<div className='d-flex'>
					{
            arr.map(obj => (
              <Card 
                title={obj.title}
                price={obj.price} 
                imageUrl={obj.imageUrl}
                onClick={() => console.log(obj)}
              />
            ))
          }
				</div>
			</div>
		</div>
	)
}

export default App
