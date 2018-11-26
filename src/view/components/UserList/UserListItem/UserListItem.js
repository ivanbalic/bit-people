import React, { Fragment } from 'react';

const UserListItem = ({fullName, email, birthDate, photo}) => {

    return (
        <Fragment>
            <li className="collection-item avatar">
                <img src={ photo } alt="user photo" className="circle" />
                <p className="title">{ fullName }</p>
                <p><i className="material-icons tiny">email</i> { email }</p>
                <p><i className="material-icons tiny">cake</i> { birthDate }</p>
            </li>
        </Fragment>
    );
}

export { UserListItem };