import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(){
    const history = useHistory()

    const routeToOrder = () => {
        history.push('/pizza')
    }

return (

    <div>
        <img 
        src='pizza.jpg'/>
        <h1>Home</h1>
        <button id="order-pizza"
            onClick={routeToOrder}>
            Order Pizza!
        </button>
    </div>
)

}