/**
 * @desc Dependencias
 */
 import styled from "styled-components";

 /**
  * @desc Material design
  */
 import { 
    Container as ContainerMaterial,
    Grid,
    Typography,
    Button
 } from '@material-ui/core';
 
/**
 * @desc Contenedor
 */
export const Container = styled(ContainerMaterial)`
    &.MuiContainer-root{
        margin-bottom: 20px;       
        background-color: #fff;
        min-height: 750px;
        padding: 0px;
    }
`;

 /**
  * @desc Contenedor de los items
  */
export const ItemContainer = styled(Grid)`
    &.MuiGrid-container{
        display: flex;
    }
    
`;

/**
 * @desc Contenedor de la foto
 */
 export const ImageContainer = styled(Grid)`  
    &.MuiGrid-item{
        display:flex;
        justify-content: center;
        margin: 0px;
    }    
 `;

/**
 * @desc Foto del item
 */
export const Img = styled.img`
    margin-top: 10px;
    width: 680px;
    height: 680px;  
    @media( max-width: 768px ){    
        width: 350px;
        height: 350px;
    }
`;

/**
 * @desc Contenedor de la foto
 */
 export const InfoContainer = styled(Grid)`     
    margin-right: 32px;   
    @media( max-width: 768px ){    
        margin-right: 0px; 
        padding: 20px;
    }      
 `;

 /**
 * @desc Precio de item
 */
export const ItemPrice = styled(Typography)`
    &.MuiTypography-root{
        font-size: 46px;
        margin: 32px 0px 32px;
    }
`;

/**
* @desc Descripcion de item
*/
export const ItemTitle = styled(Typography)`
    &.MuiTypography-root{
        font-size: 24px;
    }
`;

/**
* @desc Icono de envio gratis
*/
export const ImgShippingIcon = styled.img`

    width: 25px;
    height: 25px;
    margin-left: 5px;

`;


/**
* @desc Boton de comprar
*/
export const BuyButton = styled(Button)`    
    &.MuiButton-contained{
        background-color: #3483FA;
        color: #fff;
        width: 100%;
    }


`;

/**
* @desc Condicion del item
*/
export const Condition = styled(Typography)`
    &.MuiTypography-root{
        font-size: 14px;
        color: #666666;
        margin: 32px 0px 16px;
    }
`;

/**
 * @desc Contenedor de la descripcion
 */
export const DescriptionContainer = styled(Grid)`
    margin: 32px;
`;


/**
* @desc Titulo de la descripcion
*/
export const DescriptionTitle = styled(Typography)`
    &.MuiTypography-root{
        font-size: 28px;        
    }
`;

/**
* @desc Descripcion del item
*/
export const Description = styled(Typography)`
    &.MuiTypography-root{
        font-size: 16px;
        margin: 32px 0px 32px;
        color: #999999;
    }
`;

/**
* @desc Descripcion del item
*/
export const Decimals = styled.sup`
    
    font-size: 20px;        
    
`;









