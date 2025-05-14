import React from 'react'
import { useEffect, useState } from 'react';

const Apifetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users<i class="fa-solid fa-spinner"></i></p>;
  if (error) return <p style={{ color: 'red' }} Unable to fetch Users> {error}</p>;

  return (
    <div class="api">
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} >
          <strong>{user.name}</strong> <br/>
          {user.email}
        </div>
      ))}
    </div>
  );
};

export default Apifetch;
