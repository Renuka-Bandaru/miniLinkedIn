// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      setUser(res.data.user);
      setPosts(res.data.posts);
    };
    fetchProfile();
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{user.name}'s Profile</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography sx={{ mb: 4 }}>Bio: {user.bio || 'No bio yet.'}</Typography>

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Profile;
