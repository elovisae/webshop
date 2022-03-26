import React from 'react'
import ItemCard from './ItemCard'
import './items.css'

const Items = (props) => {
    const items = props.items;
    
  return (
    <div className="items-wrapper">
      {items.map(item => 
        <ItemCard
          key={item._id}
          bio={item.bio}
          prize={item.prize}
          img={item.img_link}
        />
        )}
    </div>
  )
}

export default Items