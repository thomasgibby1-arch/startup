import React from 'react';
import { Die, Coin } from '../play/dieandcoin';

export function Yugioh() {
  return (
    <main class="container-fluid bg-secondary">
    <h2>Yu-Gi-Oh</h2>
    <div class="row justify-content-center">
    <div class="col-md-6">
        <h3>Player 1</h3>
        <p>8000</p>
        <form action="#">
            {/* <input class="form-control" placeholder="Number of LP to lose or gain" name="search"> */}
            <button class="btn btn-success">Add</button>
            <button class="btn btn-success">Subtract</button>
        </form>

    </div>
    <div class="col-md-6">
        <h3>Player 2</h3>
        <p>8000</p>
        <form action="#">
            {/* <input class="form-control" placeholder="Number of LP to lose or gain" name="search"> */}
            <button class="btn btn-success">Add</button>
            <button class="btn btn-success">Subtract</button>
        </form>
    </div>
    <div class="col-md-6">
        <h3>Player 3</h3>
        <p>8000</p>
        <form action="#">
            {/* <input class="form-control" placeholder="Number of LP to lose or gain" name="search"> */}
            <button class="btn btn-success">Add</button>
            <button class="btn btn-success">Subtract</button>
        </form>
    </div>
    <div class="col-md-6">
        <h3>Player 4</h3>
        <p>8000</p>
        <form action="#">
            {/* <input class="form-control" placeholder="Number of LP to lose or gain" name="search"> */}
            <button class="btn btn-success">Add</button>
            <button class="btn btn-success">Subtract</button>
        </form>
    </div>
    </div>
    <div>
        <button class="btn btn-primary" to={Die()}>Die</button>
    </div>
    <div>
        <button class="btn btn-primary" onClick={Coin()}>Coin</button>
    </div>
    {/* <!-- Placeholder for a log of who changed life points --> */}
    {/* <div id="game-log">
      <Players userName={props.userName} />
      
    </div> */}
    </main>

  );
}