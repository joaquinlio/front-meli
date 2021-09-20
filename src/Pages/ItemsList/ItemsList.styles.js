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
    Divider as DividerMaterial
 } from '@material-ui/core';
 
/**
 * @desc Contenedor
 */
export const Container = styled(ContainerMaterial)`
    &.MuiContainer-root{
        margin-bottom: 20px;
        height: 100%;
    }
`;
 
 /**
  * @desc Contenedor de los items
  */
export const ItemsContainer = styled(Grid)`
    background-color: #fff;
    /* min-height: 750px; */
`;

 /**
  * @desc Contenedor de los items
  */
export const Divider = styled(DividerMaterial)`
    &.MuiDivider-root{
        background-color: #EEEEEE;
    }
`;

