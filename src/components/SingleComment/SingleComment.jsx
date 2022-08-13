import PropTypes from 'prop-types';

function SingleComment({ comment }) {
  return (
    <div className="max-w-md w-full py-1 pl-8">
      <div className="border border-gray-400 bg-white rounded p-4">
        <div className="mb-4 text-left">
          <div className="text-gray-900 font-bold text-lg mb-2">
            {comment.name}
          </div>
          <p className="text-gray-700 text-md">{comment.body}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none italic">{comment.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    postId: PropTypes.number,
    body: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default SingleComment;
