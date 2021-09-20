import React, { useReducer } from 'react'
import ItemReducer from './ItemReducer'
import ItemContext from './ItemContext'
import ItemModel from "../../Models/ItemModel";
import { GET_ITEMS, GET_CATEGORIES, GET_ITEM, SET_MODAL_ERROR } from '../types';
import { validateHttpResponse } from '../../Utils/ValidateResponse'

const ItemState = (props) => {

    // Estado Incial
    const initialState = {
        items: [],
        categories:[],
        selectedItem: null,
        modalError: {
            show: false,
            message: null
        }
    }

    // Estado
    const [state, dispatch] = useReducer(ItemReducer, initialState)
     
    

    // Obtiene los items
    const getItems = async (query) => {

        // Obtenemos las ordenes
        const response = await ItemModel.getItems(query);
                     
        // Validamos la respuesta
        validateHttpResponse( response, async function(){                               
            
            // Alias de la respuesta
            const { items, categories } = response.body

            // Setea los items en el estado
            dispatch({ type: GET_ITEMS, payload: items });

            // Setea las categorias en el estado
            dispatch({ type: GET_CATEGORIES, payload: categories });
           
            return true;

        }.bind( this ), async function( errorCode ){
            
            console.log(errorCode)

            // Setea el mensaje de error
            dispatch({ type: SET_MODAL_ERROR, payload: { show: true, message: errorCode } });
            
            return false;

        }.bind( this ));
                
    }
    
    // Obtiene un item
    const getItem = async (id) => {

        // Obtenemos las ordenes
        const response = await ItemModel.getItem(id);
        
        // Validamos la respuesta
        validateHttpResponse( response, async function(){                               
            
            // Alias de la respuesta
            const { item } = response.body
            
            // Setea el item en el estado
            dispatch({ type: GET_ITEM, payload: item });
           
            return true;

        }.bind( this ), async function( errorCode ){
            
            console.log(errorCode)

            // Setea el mensaje de error
            dispatch({ type: SET_MODAL_ERROR, payload: { show: true, message: errorCode } });
            
            return false;

        }.bind( this ));
            
    }

    // Limpia los errores
    const cleanModalError = () => {
        
        // Setea el mensaje de error
        dispatch({ type: SET_MODAL_ERROR, payload: { show: false, message: "" } });

    }

    return (
        <ItemContext.Provider value={{
            items: state.items,
            categories: state.categories,
            selectedItem: state.selectedItem,
            getItems,
            getItem,
            modalError: state.modalError,
            cleanModalError
        }}>
            { props.children }
        </ItemContext.Provider>
    )
}

export default ItemState;