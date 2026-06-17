// textNode.js

import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
    id={id}
    title="Text"
    outputs={
      [
        {
          id: "output"
        }
      ]
    }
    >
      <div>
        <label>
          Text:
          <input
          type="text"
          value={currText}
          onChange={handleTextChange}
          />
        </label>
      </div>
    </BaseNode>
  );
}
