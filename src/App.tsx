import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList, { ItemListProp } from './components/ItemList/ItemList';
import { ItemProp } from './components/ItemList/Item';

const initItems: ItemProp[] = [
  { name: "Item 1", description: "This is item 1" },
  { name: "Item 2", description: "This is item 2" },
  { name: "Item 3", description: "This is item 3" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ItemList initItems={ initItems } />
      </header>
    </div>
  );
}

export default App;
