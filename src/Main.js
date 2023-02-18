import { Link } from "react-router-dom";
const productsData=[
    {
       id:1,
       image:"bag.jfif",
       name:"Bag" ,
       price:"50000AMD",
       places:""

    },
    {
        id:2,
        image:"hoodie.webp",
        name:"Hoodie" ,
        price:"35000AMD",
        places:""
 
     },
     {
        id:3,
        image:"img1.webp",
        name:"Basketball Hoodie" ,
        price:"38500AMD",
        places:""
 
     }
]

export default function Main(){
    return(
        <div className="main">
{productsData.map((el)=>{
        return(
          <div key={el.id} className=''>
            <div className="card">
              <img src={el.image} alt="" className="images" />
              <div className="text_box">
                <Link to={`/product/${el.id}`}><h4 >{el.name}</h4></Link>
                <p>{el.price}</p>
                <button className="btn" >Add</button>
              </div>
            </div>
          </div>
        )
      })}

        </div>
    )
}
// export const getData=(id)=>{
//   if(!id || isNaN(id)) return null;
//   return productsData.find(el =>el.id===id);
// }