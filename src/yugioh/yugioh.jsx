import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from '../login/messageDialog';
import { useState } from "react";
import { Die, Coin } from '../play/dieandcoin';

export function Yugioh() {
  const [die, setDie] = useState('');
  const [coin, setCoin] = useState('');
  const [LP_1, setLP_1] = useState(8000);
  const [LP_2, setLP_2] = useState(8000);
  const [LP_3, setLP_3] = useState(8000);
  const [LP_4, setLP_4] = useState(8000);
  const [Box_1, setBox_1] = useState('');
  const [Box_2, setBox_2] = useState('');
  const [Box_3, setBox_3] = useState('');
  const [Box_4, setBox_4] = useState('');

  const handleDie = () => {
    setDie(Die());
  };

  const handleCoin = () => {
    setCoin(Coin());
  };

  const handleAdd_1 = () => {
    const amount = parseInt(Box_1, 10);
    if (isNaN(amount)) return;
    setLP_1(LP_1 + amount);
    setBox_1('');
  };

  const handleSub_1 = () => {
    const amount = parseInt(Box_1, 10);
    if (isNaN(amount)) return;
    setLP_1(LP_1 - amount);
    setBox_1('');
  };

  const handleAdd_2 = () => {
    const amount = parseInt(Box_2, 10);
    if (isNaN(amount)) return;
    setLP_2(LP_2 + amount);
    setBox_2('');
  };

  const handleSub_2 = () => {
    const amount = parseInt(Box_2, 10);
    if (isNaN(amount)) return;
    setLP_2(LP_2 - amount);
    setBox_2('');
  };

  const handleAdd_3 = () => {
    const amount = parseInt(Box_3, 10);
    if (isNaN(amount)) return;
    setLP_3(LP_3 + amount);
    setBox_3('');
  };

  const handleSub_3 = () => {
    const amount = parseInt(Box_3, 10);
    if (isNaN(amount)) return;
    setLP_3(LP_3 - amount);
    setBox_3('');
  };

  const handleAdd_4 = () => {
    const amount = parseInt(Box_4, 10);
    if (isNaN(amount)) return;
    setLP_4(LP_4 + amount);
    setBox_4('');
  };

  const handleSub_4 = () => {
    const amount = parseInt(Box_4, 10);
    if (isNaN(amount)) return;
    setLP_4(LP_4 - amount);
    setBox_4('');
  };

  return (
    <main className="container-fluid bg-secondary">
      <h2>Yu-Gi-Oh</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3>Player 1</h3>
          <h5>{LP_1}</h5>
          <div className='input-group'>
            <input 
              className="form-control" 
              placeholder="Number of LP to lose or gain" 
              type='number' 
              value={Box_1} 
              onChange={(e) => setBox_1(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleAdd_1}>Add</button>
            <button className="btn btn-danger" onClick={handleSub_1}>Subtract</button>
          </div>
        </div>
        
        <div className="col-md-6">
          <h3>Player 2</h3>
          <h5>{LP_2}</h5>
          <div className='input-group'>
            <input 
              className="form-control" 
              placeholder="Number of LP to lose or gain" 
              type='number' 
              value={Box_2} 
              onChange={(e) => setBox_2(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleAdd_2}>Add</button>
            <button className="btn btn-danger" onClick={handleSub_2}>Subtract</button>
          </div>
        </div>
        
        <div className="col-md-6">
          <h3>Player 3</h3>
          <h5>{LP_3}</h5>
          <div className='input-group'>
            <input 
              className="form-control" 
              placeholder="Number of LP to lose or gain" 
              type='number' 
              value={Box_3} 
              onChange={(e) => setBox_3(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleAdd_3}>Add</button>
            <button className="btn btn-danger" onClick={handleSub_3}>Subtract</button>
          </div>
        </div>
        
        <div className="col-md-6">
          <h3>Player 4</h3>
          <h5>{LP_4}</h5>
          <div className='input-group'>
            <input 
              className="form-control" 
              placeholder="Number of LP to lose or gain" 
              type='number' 
              value={Box_4} 
              onChange={(e) => setBox_4(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleAdd_4}>Add</button>
            <button className="btn btn-danger" onClick={handleSub_4}>Subtract</button>
          </div>
        </div>
      </div>
      
      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleDie}>Die</button>
        <div>Result: {die}</div>
      </div>
      
      <div className="mt-2">
        <button className="btn btn-primary" onClick={handleCoin}>Coin</button>
        <div>Result: {coin}</div>
      </div>
    </main>
  );
}
