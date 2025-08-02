import { useEffect, useState } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import axios from 'axios';
import PostCard from '../components/PostCard';
import NewPostForm from '../components/NewPostForm';

const Home = () => {

    const dummyPost = [{
        id: 1,
        content: "This is a test post to check rendering.",
        timestamp: new Date().toISOString(),
        author: {
          id: 1,
          name: "Jane Developer"
        }
      },
      {
        id: 2,
        content: "This is a test post to check rendering.",
        timestamp: new Date().toISOString(),
        author: {
          id: 1,
          name: "Jane Developer"
        }
      },
    ];

  const [posts, setPosts] = useState([]);
  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  const fetchPosts = async () => {
    try {
      // const res = await axios.get('http://localhost:5000/api/posts');
      // setPosts(res.data);
      setPosts(dummyPost);
    } catch (err) {
      console.error('Failed to load posts');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container
  maxWidth="sm"
  sx={{
    mt: 4,
    mb: 4,
    px: 2,
  }}
>
  <Typography variant="h4" gutterBottom>
    Recent Posts
  </Typography>

  {posts.length === 0 ? (
    <CircularProgress />
  ) : (
    <>
      <Box sx={{ mt: 4 }}>
        <NewPostForm onPostSubmit={handleNewPost} />
      </Box>

      <Box sx={{ mt: 4 }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Box>
    </>
  )}
</Container>

  );
};

export default Home;
