import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts } from 'adapters/adapters';
import InlinePost from 'components/InlinePost/InlinePost';

export default function Home() {
  const navigate = useNavigate();

  const [allPosts, setAllPosts] = useState([]);
  const handleGetPosts = async () => {
    const posts = await getPosts();
    setAllPosts(posts);
  };

  const handlePostClick = (singlePost) => {
    navigate(`/single_post/${singlePost.id}`, {
      state: { singlePostData: singlePost },
    });
  };

  useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <div>
      {allPosts.map((post) => (
        <InlinePost key={post.id} post={post} onClick={handlePostClick} />
      ))}
    </div>
  );
}
