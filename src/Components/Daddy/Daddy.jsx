import React from 'react';
import Myself from './Myself/Myself';
import Brother from './Brother/Brother';
import Sister from './Sister/Sister';

const Daddy = ({ asset }) => {
  return (
    <div className='' >
      <h1 >Daddy</h1>
      <div className='flex' >
        <Myself asset={asset} ></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Daddy;