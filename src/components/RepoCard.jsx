import React from "react";

const RepoCard = ({ repo }) => {
  return (
    <div className="border rounded-md p-4 m-2 shadow-md w-80">
      <h3 className="font-bold text-lg">{repo.name}</h3>
      <p className="text-gray-600">{repo.description || "No description"}</p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 block"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;
