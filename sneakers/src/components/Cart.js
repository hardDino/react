function Cart({ onClickClose, items = [] }) {
	return (
		<div className='overlay'>
			<div className='drawer p-30'>
				<div className='d-flex justify-between align-center mb-30'>
					<h2>Cart</h2>
					<img
						src='/img/delete.svg'
						alt='Delete'
						className='deleteBtn cu-p'
						onClick={onClickClose}
					/>
				</div>
				<div className='cartItems'>
					{items.map((obj) => (
						<div className='cartItem d-flex justify-between align-center mb-20'>
							<img width={70} height={70} src={obj.imageUrl} alt='' />
							<div className='content'>
								<p>{obj.title}</p>
								<b>{obj.price} $</b>
							</div>
							<div>
								<img src='/img/delete.svg' alt='Delete' className='deleteBtn' />
							</div>
						</div>
					))}
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
