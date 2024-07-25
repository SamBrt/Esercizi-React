import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
