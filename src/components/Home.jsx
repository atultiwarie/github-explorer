import React, { useState, useEffect } from "react";
import SearchUser from "../components/SearchUser";
import UserRepos from "../components/UserRepos";

const Home = () => {
  const [user, setUser] = useState(null);

   const [darkMode, setDarkMode] = useState(() => {
     const saved = localStorage.getItem("darkMode");
     return saved === "true" || false;
   });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">

      <div className="flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold">GitHub Explorer</h1>

        <div className="flex-1 flex justify-center mx-4">
          <SearchUser onSearch={setUser} />
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {user && (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center max-w-lg mx-auto mt-6">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-700 dark:text-gray-300">
            <span>👥 Followers: {user.followers}</span>
            <span>➡️ Following: {user.following}</span>
            <span>📦 Repos: {user.public_repos}</span>
          </div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View on GitHub
          </a>
        </div>
      )}

      {user && <UserRepos username={user.login} />}
    </div>
  );
};

export default Home;
