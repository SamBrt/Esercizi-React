import { useState, useEffect } from 'react';

const GithubUser = () => {
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (!response.ok) {
            throw new Error('User not found');
          }
          const data = await response.json();
          setUserData(data);
          setError(null);
        } catch (error) {
          setUserData(null);
          setError(error.message);
        }
      };

      fetchUserData();
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Search a Github User</h1>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <div>Error: {error}</div>}
      {!error && !userData && username && <div>Loading...</div>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <h2>{userData.name}</h2>
          <p>Login: {userData.login}</p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
