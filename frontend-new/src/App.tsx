import { Router, Route } from '@solidjs/router';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/project/:projectName" component={ProjectPage} />
    </Router>
  );
};

export default App;