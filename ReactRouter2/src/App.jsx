import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Counter } from './components/Counter';
import { ShowGithubUser } from './components/ShowGithubUser';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users/example">Show Github User</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Samuele" />} />
        <Route path="counter" element={<Counter initialValue={0} />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
