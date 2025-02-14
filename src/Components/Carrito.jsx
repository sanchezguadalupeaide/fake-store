import { useEffect, useState } from "react"

export const Carrito = ({shop, setShopPage, setShop }) =>{

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(shop.reduce((suma, producto)=> suma+producto.price,0))
    },[shop])

    return<>
    <h1>Fake Store</h1>
    <button onClick={()=>{ setShopPage(false) }}>Volver</button>

        <table className="table table-bordered">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio </th>
            </tr>
        </thead>
        <tbody>
            {shop.map((element,index)=>{
                return <tr key={index}>
                    <td>{element.title}</td>
                    <td>${element.price}</td>
                </tr>
            })}
        </tbody>
    </table>
    <h2>Total: {total}</h2>
    <button onClick={()=>{
        setShopPage(false)
        setShop([])
        alert("Gracias por su compra")
    }}>Finalizar compra</button>
    </>  
} 