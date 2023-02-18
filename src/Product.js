
import { Link, useParams } from 'react-router-dom'
// import  {Bag} from '../img/img1.webp'



const productsData = [
    {
        id: 1,
        image: "bag.jfif",
        name: "Bag",
        price: "50000AMD",

        places: "Whether it's going to the gym or just throwing the ball around with friends, the Nike Brasilia Duffel has enough space to store all the things you need. Carry it either by the adjustable shoulder strap or quickly grab the handles. Multiple easy-access points let you grab all of your stuff quickly, including a zippered side pocket for things you want to keep close."

    },
    {
        id: 2,
        image: "hoodie.webp",
        name: "Hoodie",
        price: "35000AMD",
        places: "What's it mean to be an all-star? To us, it's being your best and shining bright—from the classroom to your favorite sport or activity. Inspired by the star within everyone, the Nike Icon Fleece hoodie celebrates what you're great at. Big graphics bring extra star power to your oversized soft fleece hoodie."

    },
    {
        id: 3,
        image: "img1.webp",
        name: "Basketball Hoodie",
        price: "38500AMD",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    }
]
const Product = () => {
    const { id } = useParams();

    const product = productsData.find(el => el.id === +id)
    console.log(product)
    return (

        <div className='prod-items'>
            <div >

                <img src={"/" + product.image} alt="" className="images" />
                <h2  className='prod-item'>{product.name}</h2>
                <p className='prod-item'>{product.price}</p>
                <p className='prod-item'>{product.places}</p>

            </div>
        </div>
    )
}
export default Product