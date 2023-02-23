import React from 'react'

export default function Basket({card}) {
  return (
    <div className='basket-comp'>
      <div className='bags'>
          <h1>Bag</h1>
          <h4>There are no items in your bag.</h4>
          </div>
      {card.map(element => {
        return (
         <div >
          
          <div key={element.id}>
          <img src={element.image} className="basket-img"/>
          <p>{element.price}</p>
          </div>
          </div>
        )
      })}
    </div>
  )
}