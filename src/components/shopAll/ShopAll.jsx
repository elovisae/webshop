import React from 'react';
import Nav from '../all/Nav';
import Footer from '../all/Footer';
import Items from '../all/Items';



const ShopAll = (props) => {
    let items = props.items;
    

  return (
    <>
        <Nav/>
        <article className='content'>
            <aside>
                    SIDEBAR
            </aside>
            <main>
                <h2 className='text-left'>Shop all</h2>
                <Items items={items}/>
            </main>
        </article>
        <Footer/>
    </>
  )
}

export default ShopAll