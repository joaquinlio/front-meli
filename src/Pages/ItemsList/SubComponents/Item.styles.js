/**
 * @desc Dependencias
 */
 import styled from "styled-components";

 /**
  * @desc Material design
  */
 import { 
    Grid,
    Typography
 } from '@material-ui/core';
 
/**
 * @desc Contenedor del item
 */
export const ItemContainer = styled(Grid)`
    &.MuiGrid-container{
        display: flex;
        cursor: pointer;
    }    
`;

/**
 * @desc Contenedor de la foto
 */
export const ImageContainer = styled(Grid)`
    &.MuiGrid-root{
        @media( max-width: 599px ){
            display:flex;
            justify-content: center;
        }    
    }
`;

/**
 * @desc Contenedor de la foto
 */
export const InfoContainer = styled(Grid)`
    &.MuiGrid-root{
        width:100%;
        @media( max-width: 599px ){
            padding: 10px;
        }
    }
`;

/**
 * @desc Foto del item
 */
export const Img = styled.img`

    width: 180px;
    height: 180px;
    margin: 16px;
    border-radius: 4px;

`;

/**
 * @desc Precio de item
 */
export const ItemPrice = styled(Typography)`
    &.MuiTypography-root{
        font-size: 24px;
        margin: 32px 0px 30px;
        width: 80%;
        @media( max-width: 599px ){
            margin: 0px;
            width: 65%;
        }
    }
`;

/**
 * @desc Descripcion de item
 */
export const ItemTitle = styled(Typography)`
    &.MuiTypography-root{
        font-size: 18px;
    }
`;

/**
 * @desc Icono de envio gratis
 */
export const ImgShippingIcon = styled.img`

    width: 17px;
    height: 17px;
    margin-left: 10px;

`;


/**
 * @desc Icono de envio gratis
 */
export const Address = styled.div`
    font-size: 12px;
    float: right;    
    width: 20%;
    padding-top: 40px;
    color: #999999;
    @media( max-width: 599px ){
        padding-top: 0px;
        width: 35%
    }
`;





 


