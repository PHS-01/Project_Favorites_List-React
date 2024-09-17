import './FavoriteList.css';
import './List.css';
import React, { useState, useCallback } from 'react';

export default function FavoriteList() {
  const [items, setItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Corrigido para estar dentro do componente

  const addItem = useCallback((item) => {
    setItems((prevItems) => [...prevItems, item]);
  }, []);

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
      {/* <List fun={addItem} /> */}
    </div>
  );
}

function List({ fun }) {
  const [items, setItems] = useState(["Produto1", "Produto2"]);

  return (
    <div className="List container-flex">
      {items.map((item, index) => (
        <div key={index} className="card">
          <div id="imagem" className="card-img-top">
            Placeholder
          </div>
          <div className="card-body">
            <p className="card-text">{item}</p>
            <button className="btn btn-warning" onClick={() => fun(item)}>
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


// // src/Componentes/FavoriteList.js
// import React, { useState, useCallback } from 'react';
// import './FavoriteList.css';
// import List from './List'; // Corrija o caminho se necessário

// export default function FavoriteList() {
//   const [items, setItems] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const addItem = useCallback((item) => {
//     setItems((prevItems) => [...prevItems, item]);
//   }, []);

//   const deleteItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div className="FavoriteList">
//       <div className="dropdown">
//         <button className="btn" type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//           Favorite List
//         </button>
//         {isDropdownOpen && (
//           <ul className="dropdown-menu">
//             {items.map((item, index) => (
//               <li key={index}>
//                 {item}
//                 <button className="btn btn-danger" onClick={() => deleteItem(index)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <List addItem={addItem} />
//     </div>
//   );
// }
