import { useState } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';

const NewPostForm = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    const newPost = {
      id: Date.now(), // temporary ID
      content,
      timestamp: new Date().toISOString(),
      author: {
        id: 123,
        name: 'Current User'
      }
    };

    onPostSubmit(newPost); // pass it to parent
    setContent(''); // clear input
  };

  return (
    <Paper elevation={2} sx={{ mb: 3, p: 2 }}>
      <form className="bg-white shadow-md rounded-lg p-4 space-y-4" onSubmit={handleSubmit}>
        <TextField
          label="What's on your mind?"
          multiline
          fullWidth
          rows={3}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Box className="flex justify-end" display="flex" justifyContent="flex-end" mt={2}>
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400" type="submit" variant="contained">Post</Button>
        </Box>
      </form>
    </Paper>
  );
};

export default NewPostForm;
