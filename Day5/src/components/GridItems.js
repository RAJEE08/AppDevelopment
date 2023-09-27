import React from 'react';

function GridItems({ item, onClick }) {
  return (
    <div className="grid-item" onClick={() => onClick(item)}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
}

export default GridItems;