import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import user from '../../img/user.png'
import Footer from '../all/Footer'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <div>
        <header>
          <div id="shit">
            <p id="arrow" onClick={() => navigate(-1)}>A</p>
            <Link to='/' className="link"><h1>AMANDA</h1></Link>
            <div> 
              <Link to='/login'><img id="user-icon" className="icon" src={user} alt="" /></Link>
            </div>
          </div>
        </header>
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