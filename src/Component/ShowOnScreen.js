import { useState } from "react";

const ShowOnscreen = ({ entereddata }) => {
    console.log(entereddata,'enteredadata')
    const j = entereddata
    const [buy, setBuy] = useState({entereddata});
    console.log(typeof(buy),'buy')

    const handleBuy = (event) => {
        event.preventDefault();
        const enteredNum = document.getElementById('in').value;
        const updatedQuantity = (buy.Quantity - parseInt(enteredNum)).toString();
        setBuy(j => ({
            ...j,
            Quantity: updatedQuantity
        }));
    };


    const handleDel = () => {
        entereddata
       
    };

    return (
        <>
            {entereddata.map((ele, i) => (
                <form key={i}>
                    <p>{ele.Name}</p>
                    <p> Rs.{ele.Price}</p>
                    <p>{ele.Quantity}KG</p>
                    <label htmlFor="in"></label>
                    <input type='number' id='in'></input>
                    <button type='button' onClick={handleBuy}>Buy</button>
                    <button type='button' onClick={handleDel}>Delete</button>
                </form>
            ))}
        </>
    );
};

export default ShowOnscreen;
