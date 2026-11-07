<<<<<<< HEAD
import React from 'react';
import { Players } from './players';
import {Choice} from './choice'

export function Play(props) {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <Players userName={props.userName}/>
            <Choice userName={props.userName}/>
        </main>
  );
=======
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
>>>>>>> 2f435e82571a93f3f1fd9d80f3ba940364a253cd
}