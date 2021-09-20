import React, { useState,useContext } from "react"
import ItemContext from "../../../../Context/Items/ItemContext";
import { useHistory  } from 'react-router-dom';

/**
 * @desc Material-ui
 */
import { 
    Toolbar,      
} from "@material-ui/core";

/**
 * @desc Estilos
 */
import {
    AppBar,
    Container,
    SearchContainer,
    Input,
    IconButton
} from "./NavBar.styles";

/* Imagenes */
import Logo from "../../../../assets/img/Logo_ML.png"
import SearchIcon from "../../../../assets/icons/ic_Search.png"

function NavBar({ ...props }) {
      
    // Context
    const { getItems } = useContext(ItemContext)

    // Estado
    const [query, setQuery] = useState("Iphone x")

    // Dependencia para redireccionar
    const history = useHistory();

    const searchItems = async () => {

        await getItems(query)
        
        history.push(`/items?search=${query}`)

    }
    
    return (
      <AppBar position="fixed">
          <Toolbar variant={ "dense" }>   
            <Container>

                {/* Logo */}
                <img src={Logo} alt="logo"/> 

                {/* Contenedor del buscador */} 
                <SearchContainer>

                    {/* Buscador */}
                    <Input type="text" placeholder="Nunca dejes de buscar" onChange={ (e) => setQuery( e.target.value ) } onKeyDown={ (e) => e.key === 'Enter' && searchItems()} />   

                    {/* Icono de busqueda */}  
                    <IconButton onClick={ () => searchItems()}>
                        <img src={SearchIcon} alt="searchLogo"/> 
                    </IconButton>
                    
                </SearchContainer>   
            </Container>                                         
          </Toolbar>
      </AppBar>
    )
}

export default NavBar
