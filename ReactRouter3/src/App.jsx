import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Counter } from './components/Counter';
import { ShowGithubUser } from './components/ShowGithubUser';
import { GithubUserList } from './components/GithubUserList';
import { AddUserMessage } from './components/AddUserMessage';
import { NotFound } from './components/NotFound';

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
            <Link to="/users">Github Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Samuele" />} />
        <Route path="counter" element={<Counter initialValue={0} />} />
        <Route path="users" element={<GithubUserList />}>
          <Route index element={<AddUserMessage />} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
