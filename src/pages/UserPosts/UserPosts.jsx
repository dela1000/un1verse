import { useLayoutEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserPosts } from 'adapters/adapters';
import InlinePost from 'components/InlinePost/InlinePost';
import Button from 'components/Button/Button';
import SmallText from 'components/SmallText/SmallText';

function UserPosts() {
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();

  const { userId } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGetUserPosts = async () => {
    const posts = await getUserPosts(userId);
    setUserPosts(posts);
  };

  const handlePostClick = (singlePost) => {
    navigate(`/single_post/${singlePost.id}`, {
      state: { singlePostData: singlePost },
    });
  };

  useLayoutEffect(() => {
    handleGetUserPosts();
  }, []);

  return (
    <div>
      {userPosts.length ? (
        <div>
          <div className="flex w-full">
            <Button buttonText="Go Back" onClick={handleGoBack} />
          </div>
          {userPosts.map((userPost) => (
            <InlinePost
              key={userPost.id}
              post={userPost}
              onClick={handlePostClick}
            />
          ))}
        </div>
      ) : (
        <SmallText text="Nothing Found" />
      )}
    </div>
  );
}

export default UserPosts;
