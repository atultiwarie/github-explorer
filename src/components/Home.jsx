import React, { useState } from "react";
import SearchUser from "../components/SearchUser";
import UserRepos from "../components/UserRepos";

const Home = () => {
  const [user, setUser] = useState(null); // store user object

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center py-5">GitHub Explorer</h1>

      {/* Centered SearchUser */}
      <div className="w-full flex justify-center mb-5">
        <SearchUser onSearch={setUser} />
      </div>

      {/* Display repos if user exists */}
      {user && <UserRepos username={user.login} />}
    </div>
  );
};

export default Home;
