import React from "react";
import { NavLink } from "react-router-dom";
// import { Die, Coin } from "./dieandcoin";
import { useState } from "react";

function Coin(){
    var result = Math.floor(Math.random());
    if (result == 0){
        return "Heads";
    }
    else {
        return "Tails";
    }
}

function Die(){
    var result = Math.floor(Math.random() * 7) + 1;
    return  result;
}



export function Choice(props){
    const {die, setDie} = useState('');
    const {coin, setCoin} = useState('');
    const handleDie = () => {Math.floor(Math.random() * 7) + 1};
    const handleCoin = () => {setCoin(Coin())};

    return (
        <main className='container-fluid bg-secondary text-center'>
        <div class="dropdown dropbtn">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Which game would you like to play?</button>
            <div class="dropdown-item">
                <li className="nav-item">
                    <NavLink className="nav-link" to="yugioh">Yu-Gi-Oh</NavLink>
                </li>
            </div>
            <div class="dropdown-item">
                <li className="nav-item">
                    <NavLink className="nav-link" to="magic">Magic: the Gathering</NavLink>
                </li>
            </div>
        </div>
        <div>
            <p>Or do you just want to use dice and coin flips?</p>
            <div>
                <button class="btn btn-primary" onClick={handleDie}>Die</button>
                <div>Result: {die}</div>
            </div>
            <div>
                <button class="btn btn-primary" onClick={handleCoin}>Coin</button>
                <div>Result: {coin}</div>

            </div>
        </div>
        </main>

    );
}