import { Card, CardContent, Typography, Box } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

const PostCard = ({ post }) => {
  return (
    <Card className="bg-white shadow-sm border border-gray-200 rounded-md p-4">
      <CardContent >
        <Box  display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight="bold">
            {post.author?.name || 'Anonymous'}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
