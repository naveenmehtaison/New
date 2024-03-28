import { useState } from "react"
import ShowOnscreen from "./ShowOnScreen"

const Form=()=>{
    const [entereddata,setentereddata]=useState([])
    const [submitted,setsubmitted]=useState(false)
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        // setentereddata(event)
        const form_data = {
            Name:event.target.elements.name.value,
            Price: event.target.elements.price.value,
            Quantity:event.target.elements.quantity.value

        }
        setentereddata([...entereddata,form_data])
        setsubmitted(true)
        console.log(entereddata)

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>   
                <h1>Vegetable Shop</h1>     
                <label htmlFor="name">Name</label>
                <input type='text' id='name'></input>
                <label htmlFor="price">Price</label>
                <input type='number' id='price'></input>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id='quantity'></input>
                <button type='submit'>Add to Shop</button>
            </form>
            {submitted && <ShowOnscreen entereddata={entereddata} />}
        </div>
    );

}
export default Form