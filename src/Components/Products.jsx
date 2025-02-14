export const Products = ({ products, buyProducts }) => {
    return <div className="row">
        {products.map((element, index) => {
            return <div className="col-3" key={index}>
                <h4>{element.title}</h4>
                <h4>${element.price}</h4>
                <img src={element.image} alt="" height={200} width={200} />
                <button onClick={()=>{buyProducts(element)}}>Comprar</button>
            </div>
        })}
   </div>
}