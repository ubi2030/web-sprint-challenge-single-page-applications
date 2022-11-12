import React, { useState, useEffect } from "react";
import schema from "./validation/formSchema";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
// import * as yup from 'yup'

//INITIAL STATES
const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialPizza = []
const initialDisabled = true

export default function App(props) {

//STATES
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

//HELPER
const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setPizza([res.data, ...pizza])
    setFormValues(initialFormValues)
  })
  .catch(err => {
    console.error(err)
})
}

// const validate = (name, value) => {
//   yup.reach(schema, name)
//   .validate(value)
//   .then(()=> setformErrors({...formErrors, [name]: ''}))
//   .catch(err=> setformErrors({...formErrors, [name]: err.errors[0]}))
// }

//EVENT HANDLERS


// const inputChange = (name,value) => {
//   validate(name, value);
//   setFormValues({
//     ...formValues, 
//     [name]: value
//     });
//   }

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    special: formValues.special.trim(),
    topping1: ['onions', 'olives', 'ham'].filter(top => !!formValues[top])
  }

  postNewPizza(newPizza)
}

//SIDE EFFECTS

// useEffect(() => {
//   getPizza()
// }, [])

// useEffect(() => {
//   schema.isValid(formValues).then(valid=> setDisabled(!valid))
// }, [formValues])

return (
  <div className='App'>
    <nav>
      <h1 className='store-header'>BloomTech Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/PizzaForm'>Order Pizza</Link>
      </div>
    </nav>

<Switch>
  <Route path='/PizzaForm' component={PizzaForm}>
    <PizzaForm />
  </Route>

  <Route path='/'>
    <Home />
  </Route>

</Switch>
</div>)
}
//   return (
// <div id="pizza-order" className="container">
//   <h1>Pizza Order Form</h1>
//   {pizzaOrder.map((pizza, idx)=> {
//     return (
//       <div key={idx}>
//         {pizza.name} is a {pizza.pizaSize}
//         </div>
//     )
//   }}



//   return (
//     <div>
//       <Route path="/">
//         <Form pizzas={pizzaOrder}/>
//       </Route>
//     </div>
//     <div className="App"></div>
//     <PizzaForm
//       values={formValues}
//       change={handleChange}
//       errors={formErrors}
//       submit={handleSubmit}
//       />
//       {pizzaOrder.map(pizza => (
//         <div key={user.id}>
//           <p>{pizza.createdAt}</p>
//           <p>{pizza.name</p>
//         </div>
//       ))}
//       </div>
//       <h1>Lambda Eats</h1>
//       <p>Pizza Order Form</p>
//     </>
//   );
// };