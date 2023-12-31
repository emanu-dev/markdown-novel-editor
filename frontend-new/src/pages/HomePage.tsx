import { createSignal, createEffect } from 'solid-js';
import api from '../lib/api';
import ProjectManager from '../components/ProjectManager';

const HomePage = () => {
  const [projects, setProjects] = createSignal<string[]>([]);

  const fetchProjects = async () => {
    const projectList = await api.listProjects();
    setProjects(projectList);
  };

  createEffect(() => {
    fetchProjects();
  });

  return (
    <div>
      <h1>Novel Writing Manager</h1>
      <ProjectManager onProjectCreate={fetchProjects} />
      <ul>
        {projects().map((project) => (
          <li>
            <a href={`/project/${project}`}>
              {project}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;