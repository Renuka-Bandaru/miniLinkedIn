import { useState, useEffect } from 'react';
import NewPostForm from '../components/NewPostForm';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../Utils/apiCalls';


const Home = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
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
