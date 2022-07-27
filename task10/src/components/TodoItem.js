import { Component } from 'react';

import React from 'react';

export default function TodoItem({ onItemClick, onDeleteButtonClick, item }) {
  const { completed, title, id } = item;

  return (
    <li onClick={() => onItemClick(id)}>
      {title}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDeleteButtonClick(id);
        }}
        title="Delete item">
        Delete
      </button>
    </li>
  );
}
