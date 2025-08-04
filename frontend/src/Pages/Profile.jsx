// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchProfileAndPosts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        // Fetch user profile
        const profileRes = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        const profileData = profileRes.data;
        setProfile(profileData);

        // ✅ Corrected endpoint for fetching user posts
        const postsRes = await axios.get(`http://localhost:5000/api/posts/${profileData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setUserPosts(postsRes.data);

      } catch (err) {
        console.error("Failed to fetch profile or posts", err);
      }
    };

    fetchProfileAndPosts();
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>{profile.name}</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Bio:</strong> {profile.bio || 'No bio yet.'}</p>
      </div>

      <div className="profile-posts">
        <h3>Your Posts</h3>
        {userPosts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          userPosts.map(post => (
            <PostCard
              key={post.id}
              post={{
                content: post.content,
                timestamp: post.created_at,
                author: { name: profile.name }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
