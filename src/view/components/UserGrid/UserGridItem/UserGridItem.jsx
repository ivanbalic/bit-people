import React from "react";

const UserGridItem = ({ user }) => {
  const { pictures, gender } = user;
  const className = gender === "female" ? "card red lighten-4" : "card";
  return (
    <div className="col s12 m4">
      <div className={className}>
        <div className="card-image">
          <img src={pictures.large} alt="profile" />
          <span className="card-title white-text">{user.getFullName()}</span>
        </div>
        <div className="card-content">
          <p>
            <i className="material-icons tiny">email</i> {user.getHiddenEmail()}
          </p>
          <p>
            <i className="material-icons tiny">cake</i> {user.getFormatedBday()}
          </p>
        </div>
      </div>
    </div>
  );
};

export { UserGridItem };
