export const Products = ({ products, buyProducts }) => {
    return <div className="row">
        {products.map((element, index) => {
            return <div className="col-3" key={index}>
                <h1>{element.title}</h1>
                <h1>${element.price}</h1>
                <img src={element.image} alt="" height={200} width={200} />
                <button onClick={()=>{buyProducts(element.id)}}>Comprar</button>
            </div>
        })}
   </div>
}