import React, { useState } from 'react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const nodes = [
    { type: 'customInput', label: 'Input' },
    { type: 'customOutput', label: 'Output' },
    { type: 'text', label: 'Text' },
    { type: 'llm', label: 'LLM' },
    { type: 'api', label: 'API' },
    { type: 'filter', label: 'Filter' },
    { type: 'merge', label: 'Merge' },
    { type: 'condition', label: 'Condition' },
    { type: 'delay', label: 'Delay' }
  ];

  const filteredNodes = nodes.filter((node) =>
    node.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <button
        className={`floating-add-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Add Nodes"
      >
        <span className="plus-icon">+</span>
      </button>

      <div className={`add-nodes-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>Add Nodes</h3>
        </div>
        <div className="search-box-container">
          <input
            type="text"
            className="panel-search-input"
            placeholder="Search nodes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="nodes-grid-list">
          {filteredNodes.map((node) => (
            <DraggableNode key={node.type} type={node.type} label={node.label} />
          ))}
          {filteredNodes.length === 0 && (
            <div className="no-nodes-message">No nodes found</div>
          )}
        </div>
      </div>
    </div>
  );
};
