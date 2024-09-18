// Contexto.js
import React, { createContext, useContext, useState, useCallback } from 'react';

// Crie um contexto
const MyContext = createContext();

// Criar um provedor para o contexto
export function MyProvider({ children }){
    const [items, setItems] = useState([]);

    const addItem = useCallback((item) => {
        setItems((prevItems) => [...prevItems, item]);
    }, []);

    const deleteItem = useCallback((index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    },[items]);

    return (
        <MyContext.Provider value={{items, deleteItem, addItem }}>
            {children}
        </MyContext.Provider>
    );
};

// Um hook personalizado para usar o contexto
export function useMyContext (){
    return useContext(MyContext);
};