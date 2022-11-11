import React, { useState } from "react";
import { render } from 'react-dom';
import schema from "./validation/formSchema";

const pizzaOrder = [
  { pizzaName: 'Plain', pizzaSize: 'Medium', pizzaTopping1: true, pizzaTopping2: true, pizzaSpecial: ''},
  { pizzaName: 'Hawaiian', pizzaSize: 'Large', pizzaTopping1: true, pizzaTopping2: false, pizzaSpecial: ''},
]

// id='order-pizza'

// function Form() {
//   const [pizza, setPizza] = useState(pizzaOrder);
//   const [formValues, setFormValues] = useState({ pizzaName: "", pizzaSize: "", pizzaTopping1: false, pizzaTopping2: false, pizzaSpecial: ""});

//   const change = (evt) => {
//     const { name, value } = evt.target;
//     setFormValues({ ...formValues, [name]: value})

//   }

//   const submit = (evt) => {
//     evt.preventDefault();
//     setPizza(pizza.concat({ pizzaName = formValues.pizzaName, pizzaSize= formValues.pizzaSize, pizzaTopping1 = formValues.pizzaTopping1, pizzaTopping2 = formValues.pizzaTopping2, pizzaSpecial = formValues.pizzaSpecial}))
//     setFormValues({ pizzaName = "", pizzaSize = "", pizzaTopping1 = false, pizzaTopping2 = false, pizzaSpecial = ""})
//   }

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
//   <form id="pizza-form">
//     <input
//       name="pizzaName"
//       type="text"
//       value={formValues.pizzaName}
//       onChange={change}
//       />
//     <input
//       name="pizzaSize"
//       type="text"
//       value={formValues.pizzaSize}
//       onChange={change}
//       />
//     <input
//       name="pizzaTopping1"
//       type= bool
//       value={formValues.pizzaTopping1}
//       onChange={change}
//       />
//     <input
//       name="pizzaTopping2"
//       type= bool
//       value={formValues.pizzaTopping2}
//       onChange={change}
//       />
//       <input
//       name="pizzaSpecial"
//       type-="text"
//       value={formValues.pizzaSpecial}
//       onChange={change}
//       />
//     </form>
//     <input type="submit" value="Submit Pizza Order!"/>
// </div>
//   )
// }

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
