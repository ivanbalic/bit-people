import React from "react";

import { UserGridItem } from "./UserGridItem/UserGridItem";

const UserGrid = ({ users }) => {
  return (
    <div className="row">
      {users.map((user, index) => (
        <UserGridItem key={index} user={user} />
      ))}
    </div>
  );
};

export { UserGrid };
