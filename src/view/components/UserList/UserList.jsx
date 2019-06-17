import React from "react";
import { UserListItem } from "./UserListItem/UserListItem";

const UserList = ({ users }) => {
  return (
    <ul className="collection">
      {users.map((user, index) => (
        <UserListItem key={index} user={user} />
      ))}
    </ul>
  );
};
export { UserList };
