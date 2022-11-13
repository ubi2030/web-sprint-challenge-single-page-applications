import React, { useState, useEffect }  from 'react';
import * as yup from "yup";
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string(),
    special: yup
    .string(),
    olives: yup
    .string(),
    onions: yup
    .string(),
    ham: yup
    .string(),
    cheese: yup
    .string()
})

const initialFormValues = {
    name: '',
    size: '',
    olives: false,
    onions: true,
    ham: true,
    cheese: false,
    special: ''
  }
  
  const initialFormErrors = {
    name: '',
    size: '',
    special: '',
  }
  
  const initialPizza = []
  const initialDisabled = true

export default function Pizza(){

    const [pizza, setPizza] = useState(initialPizza);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const onChange = evt => {
        const { name, value, checked, type} = evt.target;
        setFormValues({...formValues ,
            [name]: type === 'checkbox' ? checked : value})
        validate(evt);
        console.log(formValues);
        }

    const validate = evt => {
         yup.reach(formSchema, evt.target.name)
          .validate(evt.target.value)
          .then(()=> setFormErrors({...formErrors, [evt.target.name]: ''}))
          .catch(err=> setFormErrors({...formErrors, [evt.target.name]: err.errors[0]}))
}

    const formSubmit = (e) => {
      e.preventDefault();
     axios.post('https://reqres.in/api/orders', pizza)
         .then(res => {
         console.log("Pizza Order Submitted!")
    })
         .catch(err => {
        console.error(err)
  })
    }
return (

    <div>
        <h1>Order Pizza!</h1>
        <form id="pizza-form" >
        <label>Name:
       <input id="name-input" 
           name="name"
           type="text"
           value={formValues.name}
           onChange={onChange}/>
        </label>
        <label>Size:
        <select id="size-dropdown"
            name="size"
            value={formValues.size}
            onChange={onChange}>
            <option value =''>-- Select an option</option>
            <option value ='Small'>Small</option>
            <option value ='Medium'>Medium</option>
            <option value ='Large'>Large</option>
        </select>
        </label>
        <label>Special:
        <input id="special-text"
           name="special"
           value={formValues.special}
           onChange={onChange} />
        </label>
        <h2>Toppings</h2>
        <label>Toppings:
        <input type="checkbox" value={formValues.olives} name="olives" onChange={onChange}/>
        <input type="checkbox" value={formValues.onions} name="onions" onChange={onChange}/>
        <input type="checkbox" value={formValues.ham} name="ham" onChange={onChange}/>
        <input type="checkbox" value={formValues.cheese} name="cheese"onChange={onChange}/>
        </label>
        <label>Submit:
        <button id="order-button" type="submit" value="Submit Pizza Order!" onSubmit={formSubmit}></button> 
        </label>
        </form>
    </div>
)

}