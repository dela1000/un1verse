import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getSinglePost, getSinglePostComments } from 'adapters/adapters';
import InlinePost from 'components/InlinePost/InlinePost';
import SingleComment from 'components/SingleComment/SingleComment';
import Button from 'components/Button/Button';
import SmallText from 'components/SmallText/SmallText';

function SinglePost() {
  const navigate = useNavigate();

  const [singlePost, setSinglePost] = useState({});
  const [singlePostComments, setSinglePostComments] = useState([]);
  const location = useLocation();

  const { id } = useParams();
  const { singlePostData } = location.state || {};

  const handleGetPostData = async () => {
    if (!singlePostData || !singlePostData.id) {
      const post = await getSinglePost(id);
      setSinglePost(post);
    } else {
      setSinglePost(singlePostData);
    }
    const postComments = await getSinglePostComments(id);
    setSinglePostComments(postComments);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSeeUserPosts = () => {
    navigate(`/user_posts/${singlePost.userId}`);
  };

  useEffect(() => {
    handleGetPostData();
  }, []);

  return (
    <div>
      {singlePost?.id ? (
        <div>
          <div className="flex justify-between w-full">
            <Button buttonText="See User Posts" onClick={handleSeeUserPosts} />
            <Button buttonText="Go Back" onClick={handleGoBack} />
          </div>

          <InlinePost
            key={singlePost.id}
            post={singlePost}
            onClick={handleSeeUserPosts}
          />
          <div className="pl-10">
            <SmallText text="Comments:" />
          </div>
          {singlePostComments.map((comment) => (
            <SingleComment key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <SmallText text="Nothing Found" />
      )}
    </div>
  );
}

export default SinglePost;
