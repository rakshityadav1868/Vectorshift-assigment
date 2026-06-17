// llmNode.js

import { BaseNode } from '../components/BaseNode';

export const LLMNode = ({ id}) => {

  return (
    <BaseNode
    id={id}
    title="LLM"
    inputs={
      [
        {
          id: "system"
        },
        {
          id: "prompt"
        }

      ]
    }
    outputs ={
      [
        {
          id :"response"
        }
      ]
    }
    >
    <span>This is LLM</span>
    </BaseNode>
  );
}
