import React, { useState } from 'react';
import GridItems from './GridItems'; // Import the GridItem component

function GridView() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, title: 'Kidney', image: 'kidney.jpg', count: 'Details for Item 1' },
    { id: 2, title: 'Item 2', image: 'item2.jpg', count: 'Details for Item 2' },
    { id: 3, title: 'Item 3', image: 'item3.jpg', count: 'Details for Item 3' },
    // Add more items here
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid-view">
      {items.map((item) => (
        <GridItems key={item.id} item={item} onClick={handleItemClick} />
      ))}
      {selectedItem && (
        <div className="detail-view">
          <h2>{selectedItem.title}</h2>
          <img src={selectedItem.image} alt={selectedItem.title} />
          <p>{selectedItem.details}</p>
        </div>
      )}
    </div>
  );
}

export default GridView;