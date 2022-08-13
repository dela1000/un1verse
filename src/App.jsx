import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from 'pages/Home/Home';
import SinglePost from 'pages/SinglePost/SinglePost';
import UserPosts from 'pages/UserPosts/UserPosts';
import Header from 'globalComponents/Header/Header';

function App() {
  return (
    <div className="bg-gray-800 w-screen h-screen overflow-auto">
      <Router>
        <div id="main" className="flex justify-center p-10">
          <Header />
          <div className="mt-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/single_post/:id" element={<SinglePost />} />
              <Route exact path="/user_posts/:userId" element={<UserPosts />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
