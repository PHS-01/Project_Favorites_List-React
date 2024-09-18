import './FavoriteList.css';
import './List.css';
import React, { useState, useCallback } from 'react';

export default function FavoriteList({num}) {
  const [items, setItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const addItem = useCallback((item) => {
    setItems((prevItems) => [...prevItems, item]);
  }, [items]);

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
    return (
      <div className="FavoriteList">
        <div className="dropdown">
          <button className="btn" type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Favorite List
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button className="btn btn-danger" onClick={() => deleteItem(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {num === 1 && <List fun={addItem} />}
      </div>
    );
}

const datas = [
  "Produto1",
  "Produto2"
];

export function List({fun}) {
  return (
    <div className="List container-flex">
      {datas.map((data, index) => (
        <div key={index} className="card">
          <div id="imagem" className="card-img-top">
            Placeholder
          </div>
          <div className="card-body">
            <p className="card-text">{data}</p>
            <button className="btn btn-warning" onClick={() => fun(data)}>
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}