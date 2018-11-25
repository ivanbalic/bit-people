import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchData } from '../../../services/data-service';
import { HomePage } from '../../pages/HomePage/HomePage';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {

        const users = fetchData();
        
        users.then((myUsers) => {
            this.setState({
                users: myUsers
            });
        });
    }

    render() {
        return (
            <Fragment>
            <h1>THIS IS MAIN</h1>
            <HomePage users={this.state.users}/>
            </Fragment>
        );
    }
}

export default Main;
