import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './Components/Products'

function App() {
  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])

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
  return (
    <>
      <h1>Fake Store</h1>
      <Products products={products} buyProducts={buyProducts}/>
    </>
  )
}

export default App
