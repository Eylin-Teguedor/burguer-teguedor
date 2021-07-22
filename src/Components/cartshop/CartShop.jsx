import React, { useContext } from 'react';
import { CartContext } from '../../cartcontext/CartContext';
import { NavLink } from 'react-router-dom';


export const CartShop = () => {

    const { cart, removeItem, clear } = useContext(CartContext);



    // Para definir el total del carrito

    const TotalCart = () => {
        let total = 0;
        for (const element of cart) {
            total += element.item.price * element.quantity;
        }
        return total;
    };



    const EmptyCart = () => {

        return (
            <div>
                <h2>Upss...El carrito está vacio!</h2>
                <br></br>
                <NavLink to="/">
                    <button class="btn btn-primary">
                        Regresa al inicio
                    </button>
                </NavLink>


            </div>
        );
    };

    const CartView = () => {

        return (
            <section >
                <h1>Cart</h1>
                <ul>
                    {
                        cart.map(element => (
                            <li key={element.item.id}>
                                {/*   <img src={element.item.pictureUrl} alt=""/>*/}
                                <div>
                                    <h2>{element.item.title}</h2>
                                    <p>Cantidad: {element.quantity}</p>
                                    <p>Precio por unidad: <strong>$ {element.item.price} </strong></p>
                                    <p>Precio total: <strong>${element.item.price * element.quantity}</strong></p>
                                    <button className="btn btn-primary" onClick={() => removeItem(element.item.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div >
                    <div>
                        <h2>

                            Total: $<p>{TotalCart()}</p>
                        </h2>

                    </div>





                    <button onClick={() => clear()}>Vaciar carrito</button>
                </div>
            </section>

        );

    };


    return (
        <>

            {cart.length === 0 ? EmptyCart() : CartView()}

        </>)

};