import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";

const UserRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(response.data);
      } catch (err) {
        setError("Error fetching repositories");
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]); // runs whenever username changes

  if (loading)
    return <p className="text-center mt-4">Loading Repositories...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  return (
    <div className="flex flex-wrap justify-center mt-5">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default UserRepos;
