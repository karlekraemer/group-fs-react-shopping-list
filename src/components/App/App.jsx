import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import GroceryList from '../GroceryList/GroceryList.jsx'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [newItemUnit, setNewItemUnit] = useState('');


    useEffect(() => {
        getGroceries();
    }, []);


    const getGroceries = () => {
        axios.get('/item')
            .then((response) => {
                console.log('response from GET groceries', response.data);
                setShoppingList(response.data);
            })
            .catch((error) => {
                console.log('error getting groceries', error);
            })
    }

    const addItem = (event) => {
        event.preventDefault();
        console.log('add item clicked', newItemName, newItemQuantity, newItemUnit);
        // post request below
        axios({
            method: 'POST',
            url: '/item',
            data: {
                name: newItemName,
                quantity: newItemQuantity,
                unit: newItemUnit,
                isPurchased: false, //we added this for boolean values of 'purchased'
            }
        })
            .then((response) => {
                console.log('response from POST item', response);
                getGroceries();
                setNewItemName('');
                setNewItemQuantity('');
                setNewItemUnit('');
            })
            .catch((error) => {
                console.log('error with POST request', error);
            })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <h4>{newItemName}</h4>
                <h4>{newItemName}</h4>
                <form onSubmit={addItem}>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        value={newItemName}
                        onChange={(event) => setNewItemName(event.target.value)}
                    />
                    <label htmlFor="quantity">Quantity: </label>
                    <input id="quantity" value={newItemQuantity} onChange={(event) => setNewItemQuantity(event.target.value)} />
                    <label htmlFor="unit">Unit: </label>
                    <input id="unit" value={newItemUnit} onChange={(event) => setNewItemUnit(event.target.value)} />
                    <button type="submit">Add New Item</button>
                </form>
                {/* <p>{JSON.stringify(creatureList)}</p> */} 
                {/* <ul>
                    {shoppingList.map(item => (
                        // <ListItem key={item.id} creature={item} /> */}
                        {/* <li key={item.id}>
                          {item.name} is {item.quantity}
                        </li> // when learning how to make components, we commented this out to move to the ListItem.jsx //
                    ))} */}
                    {/* </ul> */   }             
                <main>
                    {shoppingList.map(item => (
                        <GroceryList key={item.id} item={item}/>
                    ))}
                </main> 
                
            </main>
        </div>
    );
}


export default App;
