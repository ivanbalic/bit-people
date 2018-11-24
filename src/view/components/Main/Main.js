import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchData } from '../../service/data-service';

class Main extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <h1>THIS IS MANI</h1>
        );
    }
}

export default Main;
