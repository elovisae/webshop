import React from 'react';
import Nav from '../all/Nav'
import Footer from '../all/Footer'
import '../all/items.css'
import Items from '../all/Items';
import Sidebar from '../all/Sidebar';


const BestSellers = (props) => {
    let items = props.items;
    const filterItems = (items) => {
        let filteredItems = [];
            items.map(item => {
                if(item.bestseller){
                    filteredItems.push(item)
                }
            })
        return filteredItems;
    }
    let filteredItems = filterItems(items);
    
  return (
    <>
        <Nav/>
        <article className="content">
            <Sidebar />
            <main className='text-left'>
                <h2>Bestsellers</h2>
                <Items items={filteredItems}/>
            </main>
        </article>
        <Footer/>
    </>
  )
}

export default BestSellers