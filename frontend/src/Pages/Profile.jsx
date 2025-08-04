// src/pages/Profile.jsx
import { useAuth } from '../Context/AuthContext';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const Profile = () => {
  const { user } = useAuth();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching user-specific posts
    const dummyPosts = [
      {
        id: 1,
        content: 'This is my first post!',
        timestamp: new Date().toISOString(),
        author: { id: user.id, name: user.name }
      },
      {
        id: 2,
        content: 'Loving this platform so far!',
        timestamp: new Date().toISOString(),
        author: { id: user.id, name: user.name }
      }
    ];

    setUserPosts(dummyPosts);
  }, [user]);

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio || 'No bio yet.'}</p>
      </div>

      <div className="profile-posts">
        <h3>Your Posts</h3>
        {userPosts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          userPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
