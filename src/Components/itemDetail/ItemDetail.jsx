import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../cartcontext/CartContext';



const ItemDetail = ({ products }) => {

   //importar del context el metdo addItem

 const {addItem} = useContext(CartContext);

 const [confirm,setConfirm]= useState(false);

 const onAdd = (valor) => {
   
   alert(`Has agregado  ${valor} productos al carrito`);
    setConfirm(true); 
    console.log(products)
    addItem(products, valor)
   }


    return (
        <>
            <div class="container">
                <div class="card">
                    <img src={products.pictureUrl} class="card-img-top" alt="img" />
                    <div class="card-body">
                        <h5 class="card-title">{products.title}</h5>
                        <p class="card-text"> {products.description}<br />
                            ${products.price} 
                        </p>
                    </div>
                    {!confirm ? <ItemCount onAdd={onAdd} initial={"1"} stock={"5"} /> : <Link to="/cart"><button  class="btn btn-primary">Finalizar compra</button></Link>}
                </div>
            </div>

        </>
    )
}

export default ItemDetail