import React, { Fragment } from 'react';
import { UserListItem } from './UserListItem/UserListItem';

const UserList = ({users}) => {

    const UserListItems = users.map((user, index) => {

        const { birthDate, pictures } = user;

        return <UserListItem 
            key={index} 
            fullName={user.getFullName()} 
            email={user.getHiddenEmail()} 
            birthDate={birthDate.toLocaleDateString()} 
            photo={pictures.thumbnail}
        />
    });

    return (
        <ul className="collection">
            {UserListItems}
        </ul>
    );
}

export { UserList };