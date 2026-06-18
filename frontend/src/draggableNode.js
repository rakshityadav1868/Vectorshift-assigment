import React from 'react';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
  const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`draggable-node-item ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span style={{ color: '#334155', fontSize: '13px', fontWeight: '500' }}>{label}</span>
    </div>
  );
};
export default DraggableNode;