import React,{useState} from 'react'

export default function Product({product, cart,setCart}) {

    let [toggle,setToggle] = useState(true)
    const {image, title, price} = product
  return <>
  <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
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