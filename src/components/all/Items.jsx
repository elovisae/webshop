import React from 'react'
import ItemCard from './ItemCard'

const Items = (props) => {
    const items = props.items;
    console.log(items)
    {items.map(item => 
        <ItemCard
          key={item._id}
          bio={item.bio}
          prize={item.prize}
        />
        )}
  return (
    <div>
    </div>
  )
}

export default Items