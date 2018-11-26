import { fetchData } from '../../../services/data-service';

import React, { Fragment, Component } from 'react';
import { UserList } from '../../components/UserList/UserList';
import { UserGrid } from '../../components/UserGrid/UserGrid';
import { Home_Header } from '../../components/Headers/Home_Header';
import { Footer } from '../../components/Footer/Footer';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Loading } from '../../components/Loading/Loading';
import { NoResult } from '../../components/NoResult/NoResult';


class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isGrid: false,
            users: [],
            searchResults: null,
        }
    }

    loadUsers = () => {

        const data = fetchData();
        const previousView = localStorage.getItem("isGrid") === "true" ? true : false;

        data.then((users) => {
        this.setState({
            users: users,
            isGrid: previousView,
            searchResults: users,
        });
        })
    }

    onSearchHandler = (inputValue) => {
        
        const users = this.state.users;
        const filteredUsers = users.filter((user) => {
            return user.getFullName().includes(inputValue) === true;
        });
        
        const search = new Promise((resolve) => {
            
            if (!filteredUsers.length && inputValue) {
               resolve([]);
            } else {
                resolve(filteredUsers);
            }
        });

        search.then((response) => {

            this.setState({
                searchResults: response
            });
        });
    }
        
    
    onLoading = () => {

        if (this.state.searchResults === null) {

            return (
                <Loading />
            );
        } else if (this.state.searchResults.length === 0) {

            return (
                <Fragment>
                    <SearchBar onSearchHandler={this.onSearchHandler}/>
                    <NoResult />
                </Fragment>
            );
            
        } else {
            
            return (
                <Fragment>
                    <SearchBar onSearchHandler={this.onSearchHandler}/>
                    {this.state.isGrid ?
                        <UserGrid users={this.state.searchResults}/>:
                        <UserList users={this.state.searchResults}/>
                    }
                </Fragment>
            );
        }
    }

    onViewModeClick = () => {
        const isGrid = !this.state.isGrid;
        
        localStorage.setItem("isGrid", isGrid);

        this.setState({
            isGrid
        });
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return (
            <Fragment>
                <Home_Header loadUsers={this.loadUsers} onViewModeClick={this.onViewModeClick} isGrid={this.state.isGrid}/>
                <main className='container'>
                    {this.onLoading()}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default HomePage;