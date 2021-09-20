/**
 * @desc Dependencias
 */
 import React from 'react';
 import { useHistory  } from 'react-router-dom';

  /**
  * @desc Estilos
  */
 import {
    ItemContainer,
    ImageContainer,
    InfoContainer,
    Img,
    ItemPrice,
    ItemTitle,
    ImgShippingIcon,
    Address
 } from "./Item.styles";
 
/* Imagenes */
import ShippingIcon from "../../../assets/icons/ic_shipping.png"

/**
  * @desc Utilidades
  */
 import { Format } from "../../../Utils/FormatPrice"

function Item( props ){ 
    
    /* Alias de las propiedades */
    const { item }  = props;

    // Dependencia para redireccionar
    const history = useHistory();

    return (
        <ItemContainer container onClick={ () => history.push(`/items/${item.id}`)}>                             
            
            {/* Contenedor de la imagen */}
            <ImageContainer item xs={12} sm={4} md={ 3 } lg={ 2 }>

                {/* Imagen del item */}
                <Img src={item.picture} alt="ItemPicture"/> 

            </ImageContainer>

            {/* Contenedor de la info */}   
            <InfoContainer item xs={12} sm={ 8 } md={ 9 } lg={ 10 } >
                
                {/* Dirrecion */}
                <Address>{item.address}</Address> 

                {/* Precio */}
                <ItemPrice>
                    {`$ ${ Format(item.price.amount) }`} {item.free_shipping && <ImgShippingIcon src={ShippingIcon} alt="searchLogo"/> }
                </ItemPrice>  
                 
                {/* Titulo */}
                <ItemTitle>{ item.title}</ItemTitle>

            </InfoContainer>

        </ItemContainer>
    )    
}
 
 export default Item;
  