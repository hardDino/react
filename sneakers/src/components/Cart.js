function Cart() {
	return (
		<div style={{ display: 'none' }} className='overlay'>
			<div className='drawer p-30'>
				<h2>Cart</h2>
				<div className='cartItems'>
					<div className='cartItem d-flex justify-between align-center mb-20'>
						<img width={70} height={70} src='/img/sneakers/1.jpg' alt='' />
						<div className='content'>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12999$</b>
						</div>
						<div>
							<img src='/img/delete.svg' alt='Delete' className='deleteBtn' />
						</div>
					</div>
					<div className='cartItem d-flex justify-between align-center mb-20'>
						<img width={70} height={70} src='/img/sneakers/1.jpg' alt='' />
						<div className='content'>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12999$</b>
						</div>
						<div>
							<img src='/img/delete.svg' alt='Delete' className='deleteBtn' />
						</div>
					</div>
				</div>
				<ul className='cartTotal'>
					<li>
						<span>Summary:</span>
						<div></div>
						<b>21 498 $</b>
					</li>
					<li>
						<span>Tax. 5%:</span>
						<div></div>
						<b>1074 $</b>
					</li>
				</ul>
				<button className='orderBtn'>Make an order</button>
			</div>
		</div>
	)
}

export default Cart
