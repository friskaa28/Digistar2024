import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { items as initialItems } from './constants/items';

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = () => {
    const newItem = {
      title: `New card's h2`,
      subTitle: `New card's h3`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <header>
        <h1>Task: Add three Card elements</h1>
      </header>
      {items.map((item, index) => (
        <Card key={index} title={item.title} subTitle={item.subTitle} />
      ))}
      <button className="button" onClick={handleAddItem}>
        Tambah Item
      </button>
    </div>
  );
}

export default App;
