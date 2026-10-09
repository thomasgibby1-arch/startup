import React from 'react';
import { Players } from './players';
import {Choice} from './choice'

export function Play(props) {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <Players userName={props.userName} />
            <Choice userName={props.userName}/>
        </main>
  );
}