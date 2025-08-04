// src/components/NewPostForm.jsx
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

const NewPostForm = ({ onAddPost }) => {
  const { user } = useAuth();
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      content,
      timestamp: new Date().toISOString(),
      author: {
        id: user.id,
        name: user.name
      }
    };

    onAddPost(newPost);
    setContent('');
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPostForm;
