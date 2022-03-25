import React from 'react';
import Photo from './Photo'

const ItemCard = (props) => {
  return (
    <div className="card">
      <div className="item-description">
        <Photo url={props.img}/>
        <p>{props.bio}</p>
        <p>{props.prize} SEK</p>
      </div>
    </div>
  )
}

export default ItemCard