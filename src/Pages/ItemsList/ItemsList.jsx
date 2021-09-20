/**
 * @desc Dependencias
 */
import React, { useEffect, useContext } from 'react';
import ItemContext from '../../Context/Items/ItemContext';

 /**
 * @desc Estilos
 */
import {
    Container,
    ItemsContainer,
    Divider
} from "./ItemsList.styles";

/**
 * @desc Componentes
 */
import Item from "./SubComponents/Item";

function ItemsList(props){ 
    
    // Context
    const { getItems, items } = useContext(ItemContext)
     
    useEffect( async () => {
        
        // Query de la url
        const query = props.location.search;

        // Parametros de la query
        const params = new URLSearchParams(query);

        // Obtiene el parametro search
        const search = params.get('search');
               
        // Si esta seteado el parametro realiza la busqueda
        search && await getItems(search);

    }, [])

    return (
        <Container>                             
                       
            <ItemsContainer>                                      
                {
                    items.map((item,key) =>                     
                        <div key={key}>
                            <Item item={item}/>
                            <Divider variant="middle" />
                        </div>
                    )
                }                 
            </ItemsContainer>
                                                        
        </Container>
    )    
}

export default ItemsList;
 