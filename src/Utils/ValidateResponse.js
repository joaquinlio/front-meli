import { MESSAGE_ERROR_HTTP } from "../Utils/Constants"
/**
 * @desc Metodo para administrar los codigos Http
 * 
 * @param  { Object } response
 * @param  { Function } callback
 * @param  { Function } fallback
 * 
 * @return { Promise<Boolean> }
 */
export const validateHttpResponse = ( response, callback, fallback ) => {
    try{

        // Validamos que se haya procesado correctamente.
        if( response.hasOwnProperty("status") && response.status === 200) {

            callback();

            return true;

        }else if( response.hasOwnProperty("status") ){
            
            // Lanzamos la función de error.
            fallback( MESSAGE_ERROR_HTTP[ response.status || 500 ] );

            return false; 

        }

        fallback( null );

    }catch( error ){

        // Informamos el error
        fallback( error );

        return false;

    }

}