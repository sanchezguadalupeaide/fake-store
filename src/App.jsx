import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './Components/Products'
import { Carrito } from './Components/Carrito'

function App() {
  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])
  const [shopPage, setShopPage] = useState([])


  const getProducts = async () =>{
    let reponse = await fetch("https://fakestoreapi.com/products")
    let data = await reponse.json()
    setProducts(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  const buyProducts = (idProduct) =>{
    setShop([...shop,idProduct])
  }

  

  if(products.length == 0){
    return<>
      <h1>Cargando...</h1>
    </>
  }

  if (shopPage == false){
    return(
    <>
      <h1>Fake Store</h1>
      <button disabled={shop.length == 0} onClick={() =>{setShopPage(true)}}>Carrito: {shop.length}</button>
      <Products products={products} buyProducts={buyProducts}/>
    </>
    )
  }else{
    return (
   <Carrito shop={shop} setShopPage={setShopPage} setShop={setShop}/>
  )
  }
  
}

export default App
