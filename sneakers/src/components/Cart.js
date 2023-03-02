
function Cart({ onClickClose, onClickDelete, items = [] }) {

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

				{items.length === 0 && (
					<center className='emptyCart'>
						<img className='mb-20' src='/img/empty.png' alt='' />
						<h2 className='mb-10'>Cart is empty</h2>
						<p className='mb-40'>
							Add at least one pair of sneakers to place an order.
						</p>
						<button className='orderBtn' onClick={onClickClose}>
							Back to sneakers
						</button>
					</center>
				)}
				<div className='cartItems flex'>
					{items.map((item) => (
						<div key={item.id} className='cartItem d-flex justify-between align-center mb-20'>
							<img width={70} height={70} src={item.imageUrl} alt='Sneakers' />
							<div className='content'>
								<p>{item.title}</p>
								<b>{item.price} $</b>
							</div>
							<div>
								<img
									src='/img/delete.svg'
									alt='Delete'
									className='deleteBtn'
									onClick={() => onClickDelete(item)}
								/>
							</div>
						</div>
					))}
				</div>
				{items.length > 0 && (
					<div>
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
				)}
			</div>
		</div>
	)
}

export default Cart
