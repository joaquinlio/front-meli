/**
 * @desc Dependencias
 */
import React, { useContext } from "react";
import ItemContext from '../../Context/Items/ItemContext';

/**
 * @desc Estilos
 */
import { 
    Root,
        Overlay,
        Modal,
            Header,
                Title,
            Content,
                Message,
                    Button,
            Footer
} from "./Modal.styles";

/**
 * @desc Modal de error
 * 
 * @return { Material.Grid }
 */
export default ({ ...props }) => {

    // Context
    const { cleanModalError } = useContext(ItemContext)

    return (
        <Root>

            { /* Fondo del modal */ }
            <Overlay />

            { /* Modal */ }
            <Modal>

                { /* Cabecera del modal */ }
                <Header>
                    <Title> Ocurrio un error </Title>
                </Header>

                { /* Contenido */ }
                <Content>

                    { /* Tabla de contacto */ }
                    <Message> { props.children } </Message>

                </Content>

                { /* Pie de página */ }
                <Footer>
                    <Button variant="contained" onClick={ () => cleanModalError() }>Entiendo</Button>
                </Footer>

            </Modal>

        </Root>
    )

}
