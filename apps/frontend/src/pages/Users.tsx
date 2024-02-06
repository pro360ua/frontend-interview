// import React from "react";
import { useEffect, useState } from "react";

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Users = () => {
  // fetch users from api
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const users = await response.json();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="title">Users</h1>
      {/* Render the user list here */}
      <ul className="users-container">
        {users.map((user: TUser) => {
          return <li key={user.id} className="user" ><a href={`/user/${user.id}`}>{user.firstName + ' ' + user.lastName}</a></li>
        })}
      </ul>
    </div>
  );
};

export { Users };
