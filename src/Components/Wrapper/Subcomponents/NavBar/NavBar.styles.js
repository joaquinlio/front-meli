/**
 * @desc Dependencias
 */
import styled from "styled-components";

/**
 * @desc Material design
 */
import { 
   AppBar as AppBarMaterial,
   Container as ContainerMaterial
} from '@material-ui/core';

/**
  * @desc Navbar
  */
 export const AppBar = styled(AppBarMaterial)`

    &.MuiAppBar-root{
        height: 60px;
        display: flex;
        justify-content: center;
    }

    &.MuiAppBar-colorPrimary{        
        background-color: #FFE600;
    }   
    
    &.MuiPaper-elevation4{
        box-shadow: none;
    }
 `;

 /**
  * @desc Contenedor
  */
export const Container = styled(ContainerMaterial)`
     &.MuiContainer-root{
        
        display:flex;
     }
`;

/**
 * @desc Contenedor del input
 */
export const SearchContainer = styled.div`
    width: 100%;  
    display: flex;
    margin-left: 20px;      
`;

/**
 * @desc Contenedor del input
 */
export const Input = styled.input`
    width: 80%;
    padding: 10px;
    border: none;
    border-radius: 3px 0px 0px 3px;
    font-size: 18px;
    &::placeholder{
        color: #999999;
    }
    
`;


/**
 * @desc Contenedor del input
 */
export const IconButton = styled.button`
    width: 40px;
    border:none;
`;



