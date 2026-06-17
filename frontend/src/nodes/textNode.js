import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  // regex to find the variable from {{}}
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g
  const matches =[...currText.matchAll(regex)]

  // extracting name of variable from object of arrays
  const Refinedvariables= matches.map((m)=>m[1])
  const unique= [...new Set(Refinedvariables)]
  const inputs = unique.map((m)=>({
    id: m
  }))

  const lines = currText.split('\n');
  // calculating width 
  const length = lines.map((x)=> x.length)
  const longestline= Math.max(...length,0) // 0 here as edge case if array is empty so it does not crash

  // 1 charac. takes 8px approx
  const desiredwidth= (longestline*8)+40  // 40 as an extra padding
  const minwidth= Math.max(200,desiredwidth)
  const width= Math.min(500,minwidth)

  // calculating height
  const wrappedLines=lines.reduce((acc,lines)=>
  acc+Math.max(1,Math.ceil(lines.length/50)),0 // approx 50 character fits in one line
  )
  const height = Math.max(80,(wrappedLines*18)+70)
  


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={inputs}
      outputs={[{ id: "output" }]}
      width={width}
      height={height}
    >
      <div>
        <label style={{ display: 'flex', flexDirection: 'column'}}>
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            rows={Math.max(2,wrappedLines)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
