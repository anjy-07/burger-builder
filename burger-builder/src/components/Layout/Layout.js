import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = (prop) =>{    
    return (
    <Aux>
         {/* <div>Toolbar, Siderbar, Backdrop</div>  */}
         <Toolbar></Toolbar>
        <main className={classes.content}>
            {prop.children}
        </main>
    </Aux>
    );  
}

export default Layout;