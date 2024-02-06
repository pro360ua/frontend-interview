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
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const users = await response.json();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const searchUsers = async () => {
      const response = await fetch(`/api/users?query=${searchTerm}`);
      const searchedUsers = await response.json();
      setUsers(searchedUsers);
    }

    searchUsers();
  }, [searchTerm]);

  return (
    <div>
      <h1 className="title">Users</h1>
      <input
        type="text"
        className="search-bar" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search user" />
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
