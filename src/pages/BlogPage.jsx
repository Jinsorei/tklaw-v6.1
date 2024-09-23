// src/pages/BlogPage.jsx
import { useEffect, useState } from 'react';
import client from '../contentful';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getEntries({ content_type: 'blogPost' });
      setPosts(response.items);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {/* Display blog posts here */}
    </div>
  );
}

export default BlogPage;
