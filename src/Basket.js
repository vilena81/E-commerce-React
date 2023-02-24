import React from 'react'

export default function Basket({ card }) {
  return (
    <div className='basket-comp'>
      <div className='bags'>
        <h1>Bag</h1>
        <h2>There are no items in your bag.</h2>
      </div>

      {card.map(element => {
        return (
          <div key={element.id} className='basket-bag'>
            <div >
              <img src={element.image} className="basket-img" />
              <p>{element.name}</p>
              <p>{element.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}