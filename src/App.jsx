import React, { useState } from 'react'
import TopBar from './components/Topbar'
import Product from './components/Products'


function App() {
  let [cart,setCart] = useState(0)
  return <>

    <TopBar cart={cart}/>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Product cart={cart} setCart={setCart}/>
            
            </div>
        </div>
    </section>
  </>
}

export default App