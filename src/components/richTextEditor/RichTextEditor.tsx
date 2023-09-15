import React, { FC, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { RichTextEditorProps } from './types';

import EditorConfig from './editorConfig';

// Text direction
Quill.register(Quill.import('attributors/style/direction'), true);

// Alignment
Quill.register(Quill.import('attributors/style/align'), true);

// Size
const Size = Quill.import('attributors/style/size');
Size.whitelist = ['0.75em', '1em', '1.5em', '2.5em'];
Quill.register(Size, true);

// Text indent
const Parchment = Quill.import('parchment');

class IndentAttributor extends Parchment.Attributor.Style {
  constructor() {
    super('indent', 'text-indent');
  }

  add(node: HTMLElement, value: string | number) {
    if (value === 0) {
      this.remove(node);
      return true;
    }
    return super.add(node, `${value}em`);
  }
}

let IndentStyle = new IndentAttributor();

Quill.register(IndentStyle, true);

const RichTextEditor: FC<RichTextEditorProps> = props => {
  const { data = '', onChange = () => {} } = props;

  const [value, setValue] = useState(data);

  const onValueChange = (val: string) => {
    setValue(val);
    onChange(val);
  };

  return (
    <div className="px-2 w-full text-base">
      <ReactQuill
        modules={EditorConfig.modules}
        value={value}
        onChange={onValueChange}
      />
    </div>
  );
};

export default RichTextEditor;
