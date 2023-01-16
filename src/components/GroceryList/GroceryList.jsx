import React, { useState } from 'react';

function GroceryList({item}) {

    const [isPurchased, setIsPurchased] = useState(true);

    const togglePurchased = () => {
        console.log('clicked purchased');
        //set state
        setIsPurchased(!isPurchased);
    }
    
    const onPurchaseOrNot = () => {
        if (item.isPurchased) {
            return <form>
                        <p>{item.name}: {item.quantity}</p>
                        <p>Status:  {item.isPurchased}</p>
                                    {onPurchaseOrNot()}
                        <p>purchased</p>
                    </form>
        } else {
            return
        }
    }
    
    return (
        <form>
            <p>{item.name}: {item.quantity}</p>
                <p>Status: {item.isPurchased}</p>
            {onPurchaseOrNot()}

            <button onClick={togglePurchased}>Purchase</button>
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
