import React from 'react'
import HeaderOnly from '../all/HeaderOnly'
import Footer from '../all/Footer'

const Cart = () => {
  return (
    <div>
       <HeaderOnly />
        <main>
          <article>
            <h2>Your shopping cart:</h2>
            <section>cart</section>
            <section>pay method</section>
          </article>
        </main>
        <Footer />
    </div>
  )
}

export default Cart