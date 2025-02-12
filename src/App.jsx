import { useEffect, useState } from 'react'
import './App.css'
import { Productos } from './Components/Productos'

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () =>{
    let reponse = await fetch("https://fakestoreapi.com/products")
    let data = await reponse.json()
    setProducts(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  if(products.length == 0){
    return<>
      <h1>Cargando...</h1>
    </>
  }
  return (
    <>
      <h1>Fake Store</h1>
      <Productos products={products}/>
    </>
  )
}

export default App
