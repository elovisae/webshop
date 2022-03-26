import React from 'react';
import Photo from './Photo'
import addItemPng from '../../img/add.png'

const ItemCard = (props) => {
  return (
    <div className="card">
      <Photo url={props.img}/>
      <div className="photo-hover hide">
        {/* <label htmlFor="">Antal</label> */}
        <select name="number" id="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <img className="add-item-png" src={addItemPng} alt="Add to cart" onClick={() => console.log('add item')} />
      </div>
      <div className="item-description">
        <p>{props.bio}</p>
        <p>{props.prize} SEK</p>
      </div>
    </div>
  )
}

export default ItemCard