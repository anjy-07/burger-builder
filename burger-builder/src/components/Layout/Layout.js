import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default class Layout  extends Component {
    state = {
        showSideDrawer : false
    }

    SideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    }
     
    SideDrawerToggleHandler = () =>{
        this.setState((prevState) =>  { 
            console.log(prevState.showSideDrawer)
            return { showSideDrawer:!prevState.showSideDrawer }
        });
    }
    
    render() {
        return(
        <Aux>
            <Toolbar clicked={this.SideDrawerToggleHandler}></Toolbar>
            <SideDrawer show={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>          
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        );

    }
     
}

