import { CardProduct } from "../CardProduct/CardProduct";



export const ItemList = ({products})=> {

return(
    <div>
        {products.map(product=> {
            return <CardProduct product={product}/>
            })
        }

    </div>


)


};