import React from 'react'
import Products from '../componnet/Product'

function Home() {
    return (
        <div>

            <h2 className='heading'>Welcome to my redux-Toolkit-Store</h2>
            <section>
                <h3>products</h3>
                <Products />
            </section>


        </div>
    )
}

export default Home
