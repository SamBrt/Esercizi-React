import { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
      <h2>{userData.name}</h2>
      <p>Login: {userData.login}</p>
    </div>
  );
};

export default GithubUser;
