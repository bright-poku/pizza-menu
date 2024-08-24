import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

// reusing components
function App() {
    return( <div className="container">
        <Header/>
        <Menu />
        <Footer/>
    </div>
    );
}

function Header () {
    // const style = {color: "red", fontSize: "48px", textTransform: "Uppercase"};
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {/* only render if number of pizzas is greater than 0*/}
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {/*  pizzaData.map creates a new array to loop through the data */}
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))}
                </ul>
            ) : <p>We're still working on our menu. Please come back later :) </p> }
        </main>
    );
}

function Pizza(props) {
    console.log(props);

    if(props.pizzaObj.soldOut) return null;

    return (
        <div className="pizza">
            <li>
                <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </li>
        </div>
    );
}

function Footer() {
    // return React.createElement('footer', null, "we're currently open!");
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">
            {/*{new Date().toLocaleTimeString()}. Come vist us! We're currently open!*/}
            {isOpen ? (<Order openHour={openHour} closeHour={closeHour} />) : (
                <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
            )}
        </footer>
    );
}

function Order(props) {
    return (
        <div className="order">
            <p>
                We're open until {props.closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);