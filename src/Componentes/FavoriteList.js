import './FavoriteList.css';
import React, { useState } from 'react';
import { useMyContext } from './MyProvider';

export default function FavoriteList() {
  const { items, deleteItem } = useMyContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
    <div className="FavoriteList">
      <div className="dropdown">
      <button className="btn" type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="4vh" fill="white"><path d="m389-400 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {items.length > 0 ? (
            items.map((item, index) => (
              <li key={index} className="item-card">
                <img src={item.img} alt={item.nome} />
                <div className="item-card-content">
                  <h4>{item.nome}</h4>
                  <p>Preço: R${item.preco}</p>
                </div>
                <button className="btn btn-danger" onClick={() => deleteItem(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="4vh" fill="white"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
              </li>
            ))
          ) : (
            <li>
              <div className="item-card-content">
                  <h3>Lista Vazia</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" height="8vh" viewBox="0 -960 960 960" width="8vh" fill="white"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 100q-68 0-123.5 38.5T276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>
                  <p>Adicione algo na sua Lista!</p>
              </div>
            </li>
          )}
        </ul>
      )}
      </div>
    </div>
    );
}

const datas = [
  {
    img: "https://images-americanas.b2w.io/produtos/7062076297/imagens/manga-one-piece-3-em-1-11-novo-lacrado/7062076297_1_xlarge.jpg",
    nome: "One Piece",
    preco: 19.99,
    descricao: "Um jovem pirata busca o tesouro mais valioso do mundo.",
    fav: false,
  },
  {
    img: "https://down-br.img.susercontent.com/file/aa70872f487a3ddf008e1b70eba24e1a",
    nome: "Attack on Titan",
    preco: 24.99,
    descricao: "A luta da humanidade contra gigantes devoradores.",
    fav: false,
  },
  {
    img: "https://cdn.awsli.com.br/2500x2500/2653/2653452/produto/270672261/_va_4082-k6ze4nsgmh.jpg",
    nome: "A Culpa é das Estrelas",
    preco: 29.99,
    descricao: "Uma história de amor entre dois adolescentes com câncer.",
    fav: false,
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4u6ijSeL._AC_UF1000,1000_QL80_.jpg",
    nome: "O Senhor dos Anéis",
    preco: 39.99,
    descricao: "Uma épica jornada para destruir um poderoso anel.",
    fav: false,
  },
  {
    img: "https://cdn.awsli.com.br/2088/2088593/produto/129836298/2b9fdcc44e.jpg",
    nome: "1984",
    preco: 19.99,
    descricao: "Uma distopia sobre um futuro totalitário.",
    fav: false,
  },
];

export function List() {
  const { addItem } = useMyContext();

  return (
      <div className="List container-flex">
      {datas.map((data, index) => (
        <div key={index} className="card">
          <div id="imagem" className="card-img-top">
          {data.img ? (
            <img src={data.img} alt="Imagem do Livro/Mangá" />
          ) : (
            <>Placeholder</>
          )}
          </div>
          <div className="card-body">
            <p className="card-text">{data.nome}</p>
            <p className="card-text">R${data.preco}</p>
            <p>Descrição: <i>{data.descricao}</i></p>
            <button className="btn btn-warning" onClick={() => addItem(data, data.fav)}>
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}