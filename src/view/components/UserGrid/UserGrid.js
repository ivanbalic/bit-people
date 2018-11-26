import React from 'react';
import { UserGridItem } from './UserGridItem/UserGridItem';

const UserGrid = ({ users }) => {
    const UserGridItems = users.map((user, index) => {

        const { birthDate, pictures } = user;

        return <UserGridItem 
            key={index} 
            fullName={user.getFullName()} 
            email={user.getHiddenEmail()} 
            birthDate={birthDate.toLocaleDateString('de-DE')}
            photo={pictures.large}
        />
    });

    return (
        <div className="row">
            {UserGridItems}
        </div>
    );
}

export { UserGrid };