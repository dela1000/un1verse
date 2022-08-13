import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

const getPosts = async () =>
  axios
    .get(`${API_ENDPOINT}/posts/`)
    .then((res) => res.data || [])
    .catch((err) => {
      console.log(
        '+++ src/adapters/adapters.jsx - err: ',
        JSON.stringify(err, null, 4)
      );
    });

const getSinglePost = async (id) =>
  axios
    .get(`${API_ENDPOINT}/posts/${id}`)
    .then((res) => res.data || [])
    .catch((err) => {
      console.log(
        '+++ src/adapters/adapters.jsx - err: ',
        JSON.stringify(err, null, 4)
      );
    });

const getSinglePostComments = async (id) =>
  axios
    .get(`${API_ENDPOINT}/posts/${id}/comments`)
    .then((res) => res.data || [])
    .catch((err) => {
      console.log(
        '+++ src/adapters/adapters.jsx - err: ',
        JSON.stringify(err, null, 4)
      );
    });

const getUserPosts = async (id) =>
  axios
    .get(`${API_ENDPOINT}/users/${id}/posts`)
    .then((res) => res.data || [])
    .catch((err) => {
      console.log(
        '+++ src/adapters/adapters.jsx - err: ',
        JSON.stringify(err, null, 4)
      );
    });

export { getPosts, getSinglePost, getSinglePostComments, getUserPosts };
