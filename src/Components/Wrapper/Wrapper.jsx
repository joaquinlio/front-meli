/**
 * @desc Dependencias
 */
import React, { useContext } from 'react';
import ItemContext from '../../Context/Items/ItemContext';

/**
 * @desc Material design
 */
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 * @desc Componentes
 */
import NavBar from './Subcomponents/NavBar/NavBar';
import ModalError from '../ModalError/Modal'
/**
 * @desc Estilos
 */
import {
  Root,
  Main,
  Breadcrumbs,
  Category,
  CategoriesContainer
} from "./Wrapper.styles"


/**
 * Componente
 */
function Wrapper(props){
 
  // Context
  const { categories, modalError } = useContext(ItemContext)

  return (      
      <Root>
        <CssBaseline />

        {/* NavBar */}
        <NavBar/>

        <CategoriesContainer>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
              {
                  categories.map(( category, key) => 

                      <Category key={key} color="textPrimary">{category}</Category> 
                  
                  )
              }                              
          </Breadcrumbs>
        </CategoriesContainer>

        <Main>
          {
            props.children
          }
        </Main> 

        { /* Mensaje general */ }
        {
            modalError.show &&             
                <ModalError>
                   { modalError.message }
                </ModalError>            
        }                 
      </Root>
  )
  
  
}


export default Wrapper;
