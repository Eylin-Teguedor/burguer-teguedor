import { ItemList } from '../itemList/ItemList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect( () => {

    const apiFetch = async () => {

      const response = await fetch("/productos/productos.json");
      const json = await response.json();

      let aux = id ? json.filter(element => element.category === id) : json;

      setTimeout(() => {
        setProducts(aux);
      })
    }
    apiFetch();
  }, [id]);

  return (
    <>
      <h1>Bienvenido a Valiendo Burguer, porque Burguer valemos todos!!</h1>
      <ItemList products={products}/>
    </>
  )
}
