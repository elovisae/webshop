import React, {useState, useEffect} from 'react';
import Nav from '../all/Nav';
import Footer from '../all/Footer';
import Items from '../all/Items';



const ShopAll = () => {
    const [items, setItems] = useState([])   
    useEffect(() => {fetchAllItems()}, [])
    async function fetchAllItems (){
        try{
            let response        = await fetch('http://localhost:3001/items')
            console.log(response.statusText)
            let items           = await response.json();
            setItems(items);
        }catch (error){
            console.log(error)
        }   
    }
    

  return (
    <div>
        <Nav/>
        <main>
            <Items items={items}/>
        </main>
        <Footer/>
    </div>
  )
}

export default ShopAll