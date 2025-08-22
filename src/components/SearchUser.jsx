import React, { useState } from 'react'
import axios from 'axios'

const SearchUser = ({onSearch}) => {
  const [username,setUsername]= useState('')
  const [user,setUser]= useState(null)
  const [error,setError]= useState('')

  const handleSearch = async (e)=>{
    e.preventDefault()
    try {
        setError('')
        const response= await axios.get(`https://api.github.com/users/${username}`)
        setUser(response.data)
        onSearch(response.data)
    } catch (error) {
        setError('User not found')
        setUser(null)
        onSearch(null) 
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}  className="flex">
        <input
          type="text"
          placeholder="Enter your GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-md w-[250px]"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {user && (
        <div className="text-center my-4">
          <h2 className="text-xl font-semibold">{user.login}</h2>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto mt-2"
          />
        </div>
      )}
    </div>
  );
}

export default SearchUser