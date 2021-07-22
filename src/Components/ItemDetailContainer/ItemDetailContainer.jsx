import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
  const onAdd = (valor) => {
    alert(`Has agregado ${valor} productos al carrito`)
  }

  const { id } = useParams();
  const [item, setItem] = useState({});
  const [flag, setflag] = useState(false);

  useEffect(() => {
    const apiFetch = async () => {
      const response = await fetch("/productos/productos.json");
      const json = await response.json();
      let aux = json.find(element => element.id === parseInt(id));


      setTimeout(() => {
        setItem(aux)
        setflag(true)
      }, 2000);

    }
    apiFetch();
  }, [id]);


  return (
    <>
      {
        flag ?
          <ItemDetail products={item} onAdd={onAdd} initial={1} stock={5} />
          :
          <div>
              
          </div>
      }
    </>
  )
}

export default ItemDetailContainer