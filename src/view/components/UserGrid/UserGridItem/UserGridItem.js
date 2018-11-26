import React, { Fragment } from 'react';

const UserGridItem = ({ fullName, email, photo, birthDate }) => {

    return (
        <Fragment>
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={ photo } />
                        <span className="card-title">{ fullName }</span>
                    </div>
                    <div className="card-content">
                        <p><i className="material-icons tiny">email</i> { email }</p>
                        <p><i className="material-icons tiny">cake</i> { birthDate }</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { UserGridItem };