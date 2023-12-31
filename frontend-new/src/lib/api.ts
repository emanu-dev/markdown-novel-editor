import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const listProjects = async () => {
  const response = await axios.get(`${API_URL}/projects/list`);
  return response.data;
};

const createProject = async (name: string) => {
  await axios.post(`${API_URL}/projects/create`, { name });
};

const listMarkdownFiles = async (project: string, category: string) => {
  const response = await axios.get(`${API_URL}/markdown/list/${project}/${category}`);
  return response.data;
};

const readMarkdownFile = async (project: string, category: string, filename: string) => {
  const response = await axios.get(`${API_URL}/markdown/read/${project}/${category}/${filename}`);
  return response.data.content;
};

const writeMarkdownFile = async (project: string, category: string, filename: string, content: string) => {
  await axios.post(`${API_URL}/markdown/write/${project}/${category}/${filename}banana.md`, { content });
};

const createMarkdownFile = async (project: string, category: string, filename: string) => {
  await axios.post(`${API_URL}/markdown/create/${project}/${category}`, { filename });
};

const getAiFeedback = async (text: string) => {
  const response = await axios.post(`${API_URL}/ai/feedback`, { text });
  return response.data.feedback;
};

export default {
  listProjects,
  createProject,
  listMarkdownFiles,
  readMarkdownFile,
  writeMarkdownFile,
  createMarkdownFile,
  getAiFeedback
};