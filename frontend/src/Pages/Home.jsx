// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import NewPostForm from '../components/NewPostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    // Simulate fetching
    const dummyPosts = [
      {
        id: 1,
        content: 'Hello, this is a test post!',
        timestamp: new Date().toISOString(),
        author: { id: 1, name: 'Jane Developer' }
      }
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div className="home-page">
      <h2>Recent Posts</h2>
      <NewPostForm onAddPost={handleNewPost} />
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
