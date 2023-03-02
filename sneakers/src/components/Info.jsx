import React from 'react'
import AppContext from '../context'

const Info = ({ title, description, image, alt  }) => {
	const {setCartOpened} = React.useContext(AppContext)

	return (
		<>
			<center className='emptyCart'>
				<img className='mb-20' width={120}         src={image} alt={alt} />
				<h2 className='mb-10'>{title}</h2>
				<p className='mb-40'>
					{description}
				</p>
				<button className='orderBtn' onClick={() => setCartOpened(false)}>
					Back to sneakers
				</button>
			</center>
		</>
	)
}

export default Info
