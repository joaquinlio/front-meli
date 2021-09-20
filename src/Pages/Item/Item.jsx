/**
 * @desc Dependencias
 */
 import React, { useEffect ,useContext } from 'react';
 import ItemContext from '../../Context/Items/ItemContext';
 
  /**
  * @desc Estilos
  */
 import {
     Container,
     ItemContainer,
     ImageContainer,
     Img,
     InfoContainer,
     ItemPrice,
     ItemTitle,
     ImgShippingIcon,
     BuyButton,
     Condition,
     DescriptionContainer,
     DescriptionTitle,
     Description,
     Decimals
 } from "./Item.styles";
 
 /**
  * @desc Utilidades
  */
 import { Format } from "../../Utils/FormatPrice"

 /* Imagenes */
import ShippingIcon from "../../assets/icons/ic_shipping.png"
import { Grid } from '@material-ui/core';
 
 function Item(props){ 
     
    // Context
    const { getItem, selectedItem } = useContext(ItemContext)

    useEffect( async () => {
    
        // Parametro id
        const id = props.match.params.id 

        // Obtiene el item
        await getItem(id);

    }, [])


      
    return selectedItem && (
        <Container>  
            <ItemContainer container>

                {/* Contenedor de la imagen */}
                <ImageContainer item xs={12} sm={ 7 } md={ 8 } /* lg={ 10 } */>

                    {/* Imagen del item */}
                    <Img src={selectedItem.picture} alt="img-item"/> 

                </ImageContainer> 

                {/* Contenedor de la info */}
                <Grid item xs={12} sm={ 5 } md={ 4 } /* lg={ 10 } */>
                    <InfoContainer>
                        <Condition>{ `${selectedItem.condition} - ${selectedItem.sold_quantity} vendidos`}</Condition> 

                        {/* Titulo */}
                        <ItemTitle>
                            { selectedItem.title} 
                            { selectedItem.free_shipping &&
                                <ImgShippingIcon src={ShippingIcon} alt="searchLogo"/>
                            }
                        </ItemTitle>

                        {/* Precio */}
                        <ItemPrice>

                            {`$ ${ Format(selectedItem.price.amount) }`}
                            <Decimals>
                                { selectedItem?.price?.decimals === 0 ? "00" : selectedItem.price.decimals}
                            </Decimals>                        
                        </ItemPrice>  

                        {/* Boton de compra */}
                        <BuyButton variant="contained">Comprar</BuyButton>
                    </InfoContainer>   
                </Grid>                                 
            </ItemContainer>  
            <DescriptionContainer>

                <DescriptionTitle>
                    Descripcion del producto
                </DescriptionTitle>

                <Description>
                    { selectedItem.description }
                </Description>
            </DescriptionContainer>                                                                                             
        </Container>
    )    
 }
 
 export default Item;
  