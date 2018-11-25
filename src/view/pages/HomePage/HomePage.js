import React, { Fragment } from 'react';
import { UserList } from '../../components/UserList/UserList';
import { UserGrid } from '../../components/UserGrid/UserGrid';

const HomePage = ({ users }) => {
    return (
        <Fragment>
            <h2>This is HomePage</h2>
            <p>This is list in HomePage:</p>
            <UserList users={users}/>
            <p>This is grid in HomePage:</p>
            <UserGrid />
        </Fragment>
    );
}

export { HomePage };