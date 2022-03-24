import React from 'react'

const ItemCard = (props) => {
  return (
    <div className="card">
      <div className="item-description">
        <p>{props.bio}</p>
        <p>{props.prize} SEK</p>
      </div>
    </div>
  )
}

export default ItemCard