import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
  return (
    <div className="border-2 border-red-700 " >
      <h3>Uncle</h3>
      <section className="flex" >
        <Cousin name={'momota'}></Cousin>
        <Cousin name={'Ruba'} ></Cousin>

      </section>
    </div>
  );
};

export default Uncle;