import React from 'react';

export function Magic() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <h2>Magic: the Gathering</h2>
            <div class="row justify-content-center">
            <div class="col-md-6">
                <h3>Player 1</h3>
                <p>40</p>
                <form action="#">
                    {/* <input class="form-control" type="text" placeholder="Number of LP to lose or gain" name="search"> */}
                    <button class="btn btn-success">Add</button>
                    <button class="btn btn-success">Subtract</button>
                </form>

            </div>
            <div class="col-md-6">
                <h3>Player 2</h3>
                <p>40</p>
                <form action="#">
                    {/* <input class="form-control" type="text" placeholder="Number of LP to lose or gain" name="search"> */}
                    <button class="btn btn-success">Add</button>
                    <button class="btn btn-success">Subtract</button>
                </form>
            </div>
            <div class="col-md-6">
                <h3>Player 3</h3>
                <p>40</p>
                <form action="#">
                    {/* <input class="form-control" type="text" placeholder="Number of LP to lose or gain" name="search"> */}
                    <button class="btn btn-success">Add</button>
                    <button class="btn btn-success">Subtract</button>
                </form>
            </div>
            <div class="col-md-6">
                <h3>Player 4</h3>
                <p>40</p>
                <form action="#">
                    {/* <input class="form-control" type="text" placeholder="Number of LP to lose or gain" name="search"> */}
                    <button class="btn btn-success">Add</button>
                    <button class="btn btn-success">Subtract</button>
                </form>
            </div>
            <div class="col-md-6">
                <button class="btn btn-primary">Die</button>
                <button class="btn btn-primary">Coin</button>
            </div>
            {/* <!-- Placeholder for a log of who changed life points --> */}
            <div id="game-log">
            <p>Real-time log: [Player 2 adjusted life points...]</p>
            </div>
            </div>

    </main>
  );
}