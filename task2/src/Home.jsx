import React, { useState, useEffect } from 'react';

function Home({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPage(page + 1);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${page * pageSize}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, [page]);

  return (
    <div>
      <h1>Contact List</h1>
      <button onClick={onLogout}>Logout</button>
      <ul>
        {users.slice(0, page * pageSize).map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading more contacts...</p>}
      {!isLoading && <button onClick={loadMore}>Load more contacts</button>}
    </div>
  );
}

export default Home;