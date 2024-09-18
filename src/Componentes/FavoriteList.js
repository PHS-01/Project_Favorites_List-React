import './FavoriteList.css';
import './List.css';
import React, { useState } from 'react';
import { useMyContext } from './MyProvider';

export default function FavoriteList() {
  const { items, deleteItem } = useMyContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    </div>
    );
}

const datas = [
  "Produto1",
  "Produto2"
];

export function List() {
  const { addItem } = useMyContext();

  return (
      <div className="List container-flex">
      {datas.map((data, index) => (
        <div key={index} className="card">
          <div id="imagem" className="card-img-top">
            Placeholder
          </div>
          <div className="card-body">
            <p className="card-text">{data}</p>
            <button className="btn btn-warning" onClick={() => addItem(data)}>
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}