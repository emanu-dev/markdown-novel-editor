import { createSignal, onCleanup, onMount } from 'solid-js';
import { defaultValueCtx, Editor as MilkdownEditor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';
import { listener, listenerCtx } from '@milkdown/plugin-listener';


interface IProps {
  content: string;
  onSave: (content: string) => void;
}

const Editor = (props: IProps) => {
  const {
    content: contentByProp,
    onSave
  } = props;

  let ref: HTMLDivElement | undefined;
  let editor: MilkdownEditor;
  let markdownContent: string = contentByProp;

  onMount(async () => {
    editor = await MilkdownEditor.make()
      .config((ctx) => {
        ctx.set(rootCtx, ref);
        ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
          markdownContent = markdown;
        });
      })
      .config(nord)
      .use(commonmark)
      .use(listener)
      .create();
  });

  onCleanup(() => {
    editor.destroy();
  });

  const handleSave = () => {
    onSave(markdownContent);
  };

  return (
    <div>
      <div ref={ref} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;