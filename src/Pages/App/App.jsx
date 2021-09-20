/**
 * @desc Dependencias
 */
import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
/**
 * @desc Theme
 */
import ThemeDefault from "../../Utils/theme";

// Layout
import Wrapper from "../../Components/Wrapper/Wrapper";
import { ThemeProvider } from "@material-ui/core/styles";
import Loader from "../../Components/Loader/Loader";

// Componenetes
import ItemsListPage  from"../ItemsList/ItemsList";
import ItemPage  from"../Item/Item";


const App = ({ ...props }) => {
  
  return (
    <ThemeProvider theme={ ThemeDefault( ) }>
        <Wrapper { ...props }>
          <Switch>
              <Suspense fallback={ <Loader /> }>

                {/* Rutas */}
						    <Route exact path="/items" render={ ({ ...props }) => <ItemsListPage {...props} /> } /> 
						    <Route path="/items/:id" render={ ({ ...props }) => <ItemPage {...props} /> } /> 
                            
              </Suspense>
          </Switch>
        </Wrapper>
    </ThemeProvider>
  );
};


export default withRouter( App );

