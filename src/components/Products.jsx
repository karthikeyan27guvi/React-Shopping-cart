import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'


function Products({product, cart,setCart}) {

    let [toggle,setToggle] = useState(true)
    const {image, title, price} = product

    const [rating, setRating] = useState(0)

    const handleRating = (rate) =>{
        setRating(rate)
    }
  return <>
  <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <Rating onClick={handleRating} initialValue={rating} size={25} />      
                        </div>
                        ${price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                        toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                        onClick={()=>{
                            setCart(cart+1)//add product to cart
                            setToggle(prev=>!prev)//another way of writing setToggle(!toggle)
                        }}
                        >Add To Cart</button></div> :

                        <div className="text-center"><button className="btn btn-dark mt-auto"
                        onClick={()=>{
                            setCart(cart-1)//remove product from cart
                            setToggle(prev=>!prev)//another way of writing setToggle(!toggle)
                        }}
                        >Remove From Cart</button></div>
                    }
                </div>
            </div>
    </div>
  </>
}

export default Products