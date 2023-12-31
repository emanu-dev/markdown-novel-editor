import { createSignal } from 'solid-js';
import api from '../lib/api';

const ProjectManager = (props: { onProjectCreate: () => void }) => {
  const [projectName, setProjectName] = createSignal('');

  const handleCreateProject = async () => {
    await api.createProject(projectName());
    props.onProjectCreate();
  };

  return (
    <div>
      <input
        type="text"
        value={projectName()}
        onInput={(e) => setProjectName(e.currentTarget.value)}
      />
      <button onClick={handleCreateProject}>Create Project</button>
    </div>
  );
};

export default ProjectManager;