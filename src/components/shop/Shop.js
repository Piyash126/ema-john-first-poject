import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        console.log(product);
        const newCart=[...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;