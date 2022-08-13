import PropTypes from 'prop-types';

function InlinePost({ post, onClick }) {
  return (
    <div className="max-w-md w-full py-2">
      <button
        type="button"
        className={`border border-gray-400 bg-white rounded p-4 ${
          onClick === undefined ? 'cursor-default' : ''
        }`}
        onClick={() => onClick(post)}
      >
        <div className="mb-8 text-left">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {post.title}
          </div>
          <p className="text-gray-700 text-base">{post.body}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{post.userId}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

InlinePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    body: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

InlinePost.defaultProps = {
  onClick: () => {},
};

export default InlinePost;
