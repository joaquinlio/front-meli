/**
 * @desc Dependencias
 */
import styled from "styled-components";

/**
 * @desc Material design
 */
import { 
    Grid, CircularProgress
} from '@material-ui/core';

/**
 * @desc Raiz de la pantalla
 */
export const Root = styled( Grid )`
    display:flex;
    background:#b7a379;
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    justify-content:center;
    align-items:center;
`;

/**
 * @desc Animaciòn de circulo
 */
export const Spinner = styled( CircularProgress )`
    & svg{
        color:white;
    }
`;