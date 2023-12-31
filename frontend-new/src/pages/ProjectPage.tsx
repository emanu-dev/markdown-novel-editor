import { createSignal, createEffect } from 'solid-js';
import { useParams } from '@solidjs/router';
import api from '../lib/api';
import Editor from '../components/Editor';
import FileList from '../components/FileList';
import './project-page.scss';

const ProjectPage = () => {
  const params = useParams();
  const [chapters, setChapters] = createSignal<string[]>([]);
  const [worldBuilding, setWorldBuilding] = createSignal<string[]>([]);
  const [selectedFile, setSelectedFile] = createSignal<string>('');
  const [content, setContent] = createSignal<string>('');

  const fetchFiles = async (category: string) => {
    const files = await api.listMarkdownFiles(params.projectName, category);
    if (category === 'chapters') {
      setChapters(files);
    } else {
      setWorldBuilding(files);
    }
  };

  const selectFile = async (category: string, filename: string) => {
    const fileContent = await api.readMarkdownFile(params.projectName, category, filename);
    setSelectedFile(filename);
    setContent(fileContent);
  };

  const saveFile = async (newContent: string) => {
    await api.writeMarkdownFile(params.projectName, 'chapters', selectedFile(), newContent);
    setContent(newContent);
  };

  createEffect(() => {
    fetchFiles('chapters');
    fetchFiles('world-building');
  });

  return (
    <div class="project-page-component">
      <aside class="project-page-component__side-view">
        <a class="ui-button" href={`/`}> Home </a>
        <h2>{params.projectName}</h2>
        <div>
          <h3>Chapters</h3>
          <FileList files={chapters()} onSelect={(filename) => selectFile('chapters', filename)} />
          <input type="text" /> <button  class="ui-button">Create New</button>
        </div>
        <div>
          <h3>World Building</h3>
          <FileList files={worldBuilding()} onSelect={(filename) => selectFile('world-building', filename)} />
          <input type="text" /> <button  class="ui-button">Create New</button>
        </div>
      </aside>
      <div class="project-page-component__editor-view">
        <Editor content={content()} onSave={saveFile} />
      </div>
    </div>
  );
};

export default ProjectPage;