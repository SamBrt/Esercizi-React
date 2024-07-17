import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && !usernames.includes(username.trim())) {
      setUsernames([...usernames, username.trim()]);
      setUsername('');
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter GitHub username" 
          required 
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {usernames.map((user, index) => (
          <GithubUser key={index} username={user} />
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;
