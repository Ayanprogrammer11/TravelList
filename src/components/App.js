import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear", quantity: 12, packed: false },
  { id: 4, description: "Sleeping Pills", quantity: 2, packed: true },
  { id: 5, description: "Toothbrush", quantity: 1, packed: true },
  { id: 6, description: "iPhone Charger", quantity: 1, packed: true },
  { id: 7, description: "MacBook Charger", quantity: 1, packed: false },
  { id: 8, description: "Sandwich", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
    
  }
  
  function handleTogglePacked(id) {
    setItems((prevItems) => prevItems.map(item => item.id === id ? {...item, packed: !item.packed} : {...item}));
  }

  function handleDeleteAllItems() {
    const confirmed = window.confirm('Do you really want to delete all items?');
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onTogglePacked={handleTogglePacked} onDeleteAllItems={handleDeleteAllItems}/>
      <Stats items={items} />
    </div>
  );
}
