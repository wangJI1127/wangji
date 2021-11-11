import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Post } from './pages/post';
import { PostLists } from './pages/postLists';

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/post/me" style={{ padding: 5 }}>
        post
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post" element={<Post />}>
          <Route path="me" element={<PostLists />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
