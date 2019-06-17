import React, { Fragment, Component } from "react";

import { Loader } from "../../components/Loader/Loader";
import { UserList } from "../../components/UserList/UserList";
import { UserGrid } from "../../components/UserGrid/UserGrid";
import { NoResult } from "../../components/NoResult/NoResult";
import { HomeFooter } from "../../components/Footer/HomeFooter";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { HomeHeader } from "../../components/Headers/HomeHeader";
import { userCommunicator } from "../../../communicators/UserCommunicator";
import { GenderStatistics } from "../../components/GenderStatistics/GenderStatistics";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      searchResults: null,
      isGrid: localStorage.getItem("isGrid") === "true" ? true : false
    };
  }

  loadUsers = () => {
    userCommunicator.getUsers().then(users => {
      this.setState({
        users,
        searchResults: users
      });
    });
  };

  handleRefresh = () => {
    userCommunicator.getNewUsers().then(users => {
      this.setState({
        users,
        searchResults: users
      });
    });
  };

  onSearchHandler = inputValue => {
    const users = this.state.users;
    const filteredUsers = users.filter(user => {
      return user.getFullName().includes(inputValue);
    });
    this.setState({
      searchResults: filteredUsers
    });
  };

  onViewModeClick = () => {
    const { isGrid } = this.state;
    localStorage.setItem("isGrid", !isGrid);
    this.setState({
      isGrid: !isGrid
    });
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentWillUnmount() {
    const { isGrid, users } = this.state;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isGrid", isGrid);
  }

  render() {
    const { searchResults, isGrid } = this.state;
    return (
      <Fragment>
        <HomeHeader
          isGrid={isGrid}
          handleRefresh={this.handleRefresh}
          onViewModeClick={this.onViewModeClick}
        />
        <main className="container">
          {!searchResults ? (
            <Loader />
          ) : (
            <Fragment>
              <SearchBar onSearchHandler={this.onSearchHandler} />
              <GenderStatistics users={searchResults} />
              {searchResults.length ? (
                isGrid ? (
                  <UserGrid users={searchResults} />
                ) : (
                  <UserList users={searchResults} />
                )
              ) : (
                <NoResult />
              )}
            </Fragment>
          )}
        </main>
        <HomeFooter />
      </Fragment>
    );
  }
}

export { HomePage };
