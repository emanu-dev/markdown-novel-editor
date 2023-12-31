import { For } from 'solid-js';

interface IProps {
  files: string[];
  onSelect: (filename: string) => void;
}

const FileList = (props: IProps) => {
  return (
    <ul>
      <For each={props.files}>
        {(file) => (
          <li onClick={() => props.onSelect(file)}>{file}</li>
        )}
      </For>
    </ul>
  );
};

export default FileList;