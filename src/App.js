import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import ProductContext from './contexts/ProductContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={{cart}}>
				<ProductContext.Provider value={products, addItem}>
					<Navigation />
				</ProductContext.Provider>
			</CartContext.Provider>

			{/* Routes */}
			<CartContext.Provider value={{cart}}>
				<ProductContext.Provider value={{products, addItem}}>
					<Route exact path="/">
						<Products />
					</Route>
				</ProductContext.Provider>
			</CartContext.Provider>

			<CartContext.Provider value={{cart}}>
				<ProductContext.Provider value={{products, addItem}}>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
