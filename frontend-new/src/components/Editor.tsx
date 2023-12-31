import { createSignal } from 'solid-js';

interface IProps {
  content: string;
  onSave: (content: string) => void;
}

const Editor = (props: IProps) => {
  const {
    content: contentByProp,
    onSave
  } = props;

  const [content, setContent] = createSignal(contentByProp);

  const handleSave = () => {
    onSave(content());
  };

  const handleOnInput = (e: InputEvent & {
    currentTarget: HTMLTextAreaElement;
    target: HTMLTextAreaElement;
  }) => {
    setContent(e.currentTarget.value);
  }

  return (
    <div>
      <textarea
        value={content()}
        onInput={handleOnInput}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;