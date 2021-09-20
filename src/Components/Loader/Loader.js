/**
 * @desc Dependencias
 */
import React from "react";

/**
 * @desc Estilos
 */
import { 
    Root, Spinner
} from "./Loader.styles";

/**
 * @desc SubComponente - Layout: Formulario de login
 * 
 * @return { Material.Grid }
 */
export default () => {

    return (
        <Root>

            { /* Icono animado */ }
            <Spinner />

        </Root>
    )

}
