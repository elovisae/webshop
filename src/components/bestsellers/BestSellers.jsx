import React from 'react';
import Nav from '../all/Nav'
import Footer from '../all/Footer'
import '../all/items.css'
import Items from '../all/Items';
import {
    beigeBag,
    blueMiniDress,
    blueShorts,
    blueVest,
    dressPattern,
    greenBlazer,
    greenDress,
    greenPants,
    pinkBlazer,
    pinkDress,
    pinkPants,
    tote,
    widePants

} from '../../img/clothing/clothing';

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
            <aside>
                SIDEBAR
            </aside>
            <main className='text-left'>
                <h2>New in</h2>
                <Items items={filteredItems}/>
            </main>
        </article>
        <Footer/>
    </>
  )
}

export default BestSellers