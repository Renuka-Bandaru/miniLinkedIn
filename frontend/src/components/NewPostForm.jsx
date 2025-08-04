// src/components/NewPostForm.jsx
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { createPost } from '../Utils/apiCalls';

const NewPostForm = ({ onAddPost }) => {
  const [content, setContent] = useState('');
  const { token, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = await createPost(content, token);
    if (newPost) {
      onAddPost(newPost);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="3"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPostForm;
