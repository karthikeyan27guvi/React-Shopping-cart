import React, { useState } from 'react'
import TopBar from './components/Topbar'
import Product from './components/Products'
import Footer from './Footer'


function App() {
  let [cart,setCart] = useState(0)

  const data = [
    {
        id: 1,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg',
        title: "Apple iPhone 13",
        price: 999
    },
    {
        id: 2,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1696964122967',
        title: "Apple MacBook Pro",
        price: 1999
    },
    {
        id: 3,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg',
        title: "Apple iphone 12",
        price: 799
    },
    {
        id: 4,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg',
        title: "Samsung S21",
        price: 999
    },
    {
        id: 5,
        image: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg',
        title: "Google Pixel 6",
        price: 799
    },
    {
        id: 6,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg',
        title: "Apple iphone 16",
        price: 1500
    },
    {
        id: 1,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        title: "Apple iPhone 15 Pro Max",
        price: 1199
    },
    {
        id: 2,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg',
        title: "Apple iPhone 16 Pro Max",
        price: 1299
    }
    
]
  return <>

    <TopBar cart={cart}/>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item)=>{
                return (
              <Product 
              key={item.id}
              product={item}
              cart={cart} 
              setCart={setCart}/>
            )})} 
            </div>
        </div>
    </section>
    <Footer/>
  </>
}

export default App