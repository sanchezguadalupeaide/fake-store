export const Productos = ({products}) => {
    return <>
    <table>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio </th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            {products.map((element,index)=>{
                return <tr key={index}>
                    <td>{element.title}</td>
                    <td>{element.price}</td>
                    <td><img src={element.image} height={150} width={150}/></td>
                </tr>
            })}
        </tbody>
    </table>
</>
}