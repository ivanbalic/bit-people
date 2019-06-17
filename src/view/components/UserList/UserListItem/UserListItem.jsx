import React from "react";

const UserListItem = ({ user }) => {
  const { pictures, gender } = user;
  const className =
    gender === "female"
      ? "collection-item avatar red lighten-4"
      : "collection-item avatar";
  return (
    <li className={className}>
      <img src={pictures.thumbnail} alt="user" className="circle" />
      <p className="title">{user.getFullName()}</p>
      <p>
        <i className="material-icons tiny">email</i> {user.getHiddenEmail()}
      </p>
      <p>
        <i className="material-icons tiny">cake</i> {user.getFormatedBday()}
      </p>
    </li>
  );
};

export { UserListItem };
