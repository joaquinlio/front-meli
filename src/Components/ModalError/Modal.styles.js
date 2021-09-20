/**
 * @desc Dependencias
 */
import styled, { css } from "styled-components";

/**
 * @desc Material design
 */
import { 
    Grid, 
    Typography,
    Button as ButtonMaterial
} from '@material-ui/core';

/**
 * @desc Raiz de la pantalla
 */
export const Root = styled( Grid )`
    display:flex;
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    justify-content:center;
    align-items:center;
    z-index:12;
`;

    /**
     * @desc Fondo del modal
     */
    export const Overlay = styled( Grid )`
        display:flex;
        background:rgba(0,0,0,.5);
        width:100vw;
        height:100vh;
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
    `;

    /**
     * @desc Modal
     */
    export const Modal = styled( Grid )`
        background:white;
        min-width:600px;
        z-index:10000;
        border-radius:15px;
        padding:10px;
    `;

        /**
         * @desc Cabecera del modal
         */
        export const Header = styled( Grid )`
            display:flex;
            padding:10px;
            justify-content:center;
        `;

            /**
             * @desc Titulo
             */
            export const Title = styled( Typography )`
                &.MuiTypography-body1{
                    font-weight:bold;
                }
            `;

        /**
         * @desc Contenido del modal
         */
        export const Content = styled( Grid )`
            display:flex;
            justify-content:center;
            padding:20px 0px;
        `;

        /**
         * @desc Mensaje del modal
         */
        export const Message = styled( Typography )`
        `;

        /**
         * @desc Acciones
         */
        export const Actions = styled( Grid )`
            display:flex;
            justify-content:flex-end;
            flex-wrap:nowrap;
            flex-direction:row;
        `;

        /**
         * @desc Acciones
         */
        export const Button = styled( ButtonMaterial )`
            &.MuiButton-root{
                background:#3483FA;
                color:white;
    
                &:hover, &:focus, &:active{
                    background:#3483FA;
                } 

                margin:10px;

            }
        `;

        /**
         * @desc Pie de pagina
         */
        export const Footer = styled( Grid )`
            display:flex;
            flex-wrap:nowrap;
            justify-content:center;
            flex-direction:row;
        `;
