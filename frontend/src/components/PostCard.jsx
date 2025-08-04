const PostCard = ({ post }) => {
  const { content, timestamp, author } = post;

  const formatDate = (ts) => {
    return new Date(ts).toLocaleString();
  };

  return (
    <div className="post-card">
      <p className="post-author">{author?.name || "Unknown User"}</p>
      <p className="post-content">{content}</p>
      <p className="post-timestamp">{formatDate(timestamp)}</p>
    </div>
  );
};

export default PostCard;
