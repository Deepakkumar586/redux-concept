import React from 'react'
import { Link } from 'react-router-dom'

// store se data ko get/fetch karne ke liye
import { useSelector } from 'react-redux'

function Navbar() {
    const items = useSelector((state) => state.cart);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className='logo'>REDUX_STORE</span>
            <div>
                <Link className='navLink' to='/'> Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>

                <span className='cartCount'>
                    cart items :{items.length}
                </span>
            </div>
        </div>
    )
}

export default Navbar
