import React from 'react';

export default function Pizza(){

return (

    <div>
        <h1>Home</h1>
        <form id="pizza-form"></form>
        <input id="name-input"
           name="text" />
        <select id="size-dropdown">
            <option value =''>-- Select an option</option>
            <option value ='Small'>Small</option>
            <option value ='Medium'>Medium</option>
            <option value ='Large'>Large</option>
        </select>
        <input id="special-text"
           name="text" />
        <h2>Toppings</h2>
        <input type="checkbox" value="olives" />
        <input type="checkbox" value="onions" />
        <input type="checkbox" value="ham" />
        <input type="checkbox" value="cheese" />
    </div>
)

}




// import React from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';

// export default function PizzaForm (props) {
//     const { change, submit } = props;
//     const { pizzaName, size, toppping1, topping2, special } = props.values;

//     const onChange = (e) => {
//         const { name, value, checked, type } = e.target;
//         const newVal = type === 'checkbox' ? checked : value;
//         change(name, newVal);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         submit();
//     }

//     return (
//         <div>
//             <h1> Pizza Order Form!</h1>
//             <form id="pizza-form" onSubbmit ={onSubmit}>
//                 <label>Name:
//                     <input
//                         name="pizzaName"
//                         value={pizzaName}
//                         onChange={onChange}
//                         />
//                 </label>
//             </form>
//         </div>
    
//     )
// }




// <label> pizzaTopping1

// </label>



// <option value =''>-- Select an option</option>
// <option value ='olives'>Olives</option>
// <option value ='onions'>Onions</option>
// <option value ='ham'>Ham</option>


// id='order-pizza'


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

// export default PizzaForm;