import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const MyComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
