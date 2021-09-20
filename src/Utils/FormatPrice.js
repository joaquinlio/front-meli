//Metodo para formatear el precio
 export const Format = ( price ) => {
    try{
        
        return Intl.NumberFormat("es-AR").format(price);

    }catch( error ){

        console.log(error)

        return false;

    }

}