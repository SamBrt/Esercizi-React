import React from 'react';
import { useGithubUser } from './useGithubUser';

export const GithubUser = ({ username }) => {
  const { userData, error } = useGithubUser(username);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Fetching Github User...</div>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
      <h2>{userData.name}</h2>
      <p>Login: {userData.login}</p>
    </div>
  );
};

