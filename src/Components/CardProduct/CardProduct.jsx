import React from 'react'
import { Link } from 'react-router-dom';

export const CardProduct = ({ product }) => {
    return (
        <div class="card">
            <Link to={`/item/${product.id}`}>
             <img src={product.pictureUrl} class="card-img-top" alt="img"/>
            </Link>
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text"> {product.description}<br />
                     ${product.price}</p>
                    <a href={`/item/${product.id}`} class="btn btn-primary">Ir al Articulo</a>
                </div>
        </div >
    );
}
