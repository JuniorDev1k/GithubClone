// Gtihub Public Api endPoints:

// Fetch User
export const GetUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
  } catch (error) {
    console.log("error:", error);
  }
};

// Search Users .
export const SearchUser = async (searchedUser: string) => {
  try {
    const response = fetch(
      `https://api.github.com/search/users?q=${searchedUser}`
    );
  } catch (error) {
    console.log("error:", error);
  }
};

// List  + search  repo for a Specefic User.
export const RepositoryList = async (
  username: string,
  searchTerm: string = ""
) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = await response.json();

  if (searchTerm) {
    return repos.filter((repo: any) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return repos;
};

// Search Popular Repos.
export const SearchRepos = async (repo: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?${repo}`
    );
  } catch (error) {
    console.log("error:", error);
  }
};
