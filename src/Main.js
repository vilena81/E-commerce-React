import { useState } from "react";
import { Link } from "react-router-dom";



const productsData = [
  {
    id: 1,
    image: "bag.jfif",
    name: "Nike Brasilia",
    price: "50000 AMD",
    places:""
  },
  {
    id: 2,
    image: "hoodie.webp",
    name: "Hoodie",
    price: "35000 AMD",
    places:""
  },
  {
    id: 3,
    image: "img1.webp",
    name: "Basketball Hoodie",
    price: "38500 AMD",
    places:""
  },
  {
    id: 4,
    image: "essental.webp",
    name: "Nike Sportswear Essential",
    price: "25500 AMD",
    places:""
},
{
    id: 5,
    image: "swear.webp",
    name: "Nike Sportswear Club Fleece",
    price: "25500 AMD",
    places:""
},
{
  id: 6,
  image: "socks.webp",
  name: "Nike Elite Crew",
  price: "5500 AMD",
  places:""
},
{
  id: 7,
  image: "jordan.webp",
  name: "Air Jordan 6 Retro",
  price: "20500 AMD",
  places:""
}
]

export default function Main({addToCard}) {
  
  return (
    <div className="main">
      {productsData.map((el) => {
        return (
          <div key={el.id} className=''>
            <div className="card">
              <img src={el.image} alt="" className="images" />
              <div className="text_box">
                <Link to={`/product/${el.id}`}><h4 className="title">{el.name}</h4></Link>
                <p>{el.price}</p>
                <button onClick={() => addToCard(el)} className="btn" >Add to Card</button>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}



localStorage.setItem('person', JSON.stringify(productsData));

