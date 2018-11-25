import React, { Fragment } from 'react';

const UserListItem = ({fullName, email, birthDate, photo}) => {

    return (
        <Fragment>
            <li className="collection-item avatar">
                <img src={ photo } alt="user photo" className="circle" />
                <p className="title">{ fullName }</p>
                <p>{ email }</p>
                <p>{ birthDate }</p>
            </li>
        </Fragment>
    );
}

export { UserListItem };