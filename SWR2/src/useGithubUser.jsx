import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('User not found');
  }
  return res.json();
});

export function useGithubUser(username) {
  const shouldFetch = username != null && username !== '';
  const { data, error, mutate } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  const refetch = () => {
    if (shouldFetch) {
      mutate();
    }
  };

  return {
    userData: data,
    error: error ? error.message : null,
    refetch
  };
}
