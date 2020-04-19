import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const Layout = (prop) =>{    
    return (
    <Aux>
         <div>Toolbar, Siderbar, Backdrop</div> 
        <main className={classes.content}>
            {prop.children}
        </main>
    </Aux>
    );  
}

export default Layout;