
import { Link, useParams } from 'react-router-dom'



const productsData = [
    {
        id: 1,
        image: "bag1.webp",
        image1: "bag2.webp",
        image2: "bag3.webp",
        name: "Nike Brasilia",
        price: "50000 AMD",
        places: "Whether it's going to the gym or just throwing the ball around with friends, the Nike Brasilia Duffel has enough space to store all the things you need. Carry it either by the adjustable shoulder strap or quickly grab the handles. Multiple easy-access points let you grab all of your stuff quickly, including a zippered side pocket for things you want to keep close."

    },
    {
        id: 2,
        image: "hoodie1.webp",
        image1: "hoodie2.webp",
        image2: "hoodie3.webp",
        name: "Hoodie",
        price: "35000 AMD",
        places: "What's it mean to be an all-star? To us, it's being your best and shining bright—from the classroom to your favorite sport or activity. Inspired by the star within everyone, the Nike Icon Fleece hoodie celebrates what you're great at. Big graphics bring extra star power to your oversized soft fleece hoodie."

    },
    {
        id: 3,
        image: "img1.webp",
        image1: "shoes1.webp",
        image2: "shoes2.webp",
        name: "Basketball Hoodie",
        price: "38500 AMD",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."
    },
    {
        id: 4,
        image: "essental.webp",
        image1: "essental1.webp",
        image2: "essental2.webp",
        name: "Nike Sportswear Essential",
        price: "25500 AMD",
        places: "Throw on this top and go. Stretchy ribbed fabric helps you move with ease while a slight cropped cut means you can tuck it into pants without adding any bulk. "
    },
    {
        id: 5,
        image: "swear1.jfif",
        image1: "swear2.webp",
        image2: "swear3.webp",
        name: "Nike Sportswear Club Fleece",
        price: "25500 AMD",
        places: "A closet staple, the Nike Sportswear Club Fleece Crew combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look. "
    },
    {
        id: 6,
        image: "socks1.jfif",
        image1: "socks2.webp",
        image2: "socks3.webp",
        name: "Nike Elite Crew",
        price: "5500 AMD",
        places: "The Nike Elite Crew Basketball Socks offer a supportive fit and feel thanks to an arch band, while zonal cushioning helps absorb impact as you run the court. "
    },
    {
        id: 7,
        image: "jordan1.webp",
        image1: "jordan2.webp",
        image2: "jordan3.jfif",
        name: "Air Jordan 6 Retro",
        price: "20500 AMD",
        places: "Be cool. Stay cool. The AJ6  lets your style take flight with a colorway rooted to Jordan Brand DNA. MJ wore 'em when he claimed his first championship and you'll be wearing 'em for—well, whatever you want. Laden with sleek features like dynamic design lines and an iced outsole, these sneakers bring speed and class to any 'fit. After all, they were famously inspired by Jordan's (wait for it) COOL sports car. So lace up, and let your kicks do the rest. "
    }
]
const Product = () => {
    const { id } = useParams();

    const product = productsData.find(el => el.id === +id)
    console.log(product)
    return (

        <div className='prod-items'>
            <div className='prod-item-side'>

                <img src={"/" + product.image} alt="" className="images" />
                <img src={"/" + product.image1} alt="" className="images" />
                <img src={"/" + product.image2} alt="" className="images" />
            </div>
            <div>
                <h2 className='prod-item'>{product.name}</h2>
                <p className='prod-item'>{product.price}</p>
                <p className='prod-item'>{product.places}</p>

            </div>
        </div>
    )
}
export default Product