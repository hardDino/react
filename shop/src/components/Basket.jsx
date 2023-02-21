import { ShoppingBasket } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import BasketItem from './BasketItem'

const Basket = (props) => {
	const {
		cartOpen,
		closeCart = Function.prototype,
		order = [],
		removeFromOrder
	} = props;
	
	return (
		<Drawer
			anchor='right'
			open={cartOpen}
			onClose={closeCart}
		>
			<List
				sx={{ width: '300px' }}
			>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary="Cart" />
				</ListItem>
				<Divider />

				{!order.length ? (
					<ListItem>Cart is empty</ListItem>
				) : (
					<>
					{order.map((item) => (
						<BasketItem 
						key={item.name} 
						removeFromOrder={removeFromOrder} 
						{...item} />
					))}
					<Divider />
					<ListItem>
						<Typography sx={{ fontWeight: 700 }}>
							Summary:{' '}
							{order.reduce((acc, item) => {
								return acc + item.price * item.quantity;
							}, 0)}{' '}
							rubles.
						</Typography>
					</ListItem>
					</>
				)}

			</List>
		</Drawer>
	)
}

export default Basket