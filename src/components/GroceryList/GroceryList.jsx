import React, { useState } from 'react';

function GroceryList({item}) {

    const [isPurchased, setIsPurchased] = useState(true);

    const togglePurchased = () => {
        console.log('clicked purchased');
        //set state
        setIsPurchased(!isPurchased)
    }
    
    const onPurchaseOrNot = () => {
        if (item.isPurchased) {
            return <p>purchased</p>
        } else {
            return <button onClick={togglePurchased}>Purchase</button>
        }
    }
    
    return (
        <form>
            {item.name} is from {item.quantity}
            {onPurchaseOrNot()}
        </form>
    )
}

export default GroceryList

// let listOfHeroes = props.heroList.map((hero) => {
//     // return some JSX
//     return (
//         <SuperHeroItem
//             hero={hero}
//             avengersAssemble={props.avengersAssemble} />
//     )
// });
