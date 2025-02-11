export const Products = ({products}) =>{
    return<>
        <h1>Nombre de Producto: {products.title}</h1>
        <h1>Precio: {products.price}</h1>
        <h1>Categoria: {products.category}</h1>
        <img src={products.image} alt="" height={200} width={200}/>
    </>
}