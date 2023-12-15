import React from 'react';
import {Login} from './login';

export function Home({login}) {
  return (
   <Login login={login}/>
  );
}