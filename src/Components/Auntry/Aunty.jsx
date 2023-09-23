import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
  return (
    <div className="">
      <h3>Aunty</h3>
      <section className='flex' >
        <Cousin name={'Moamshad'} ></Cousin>
        <Cousin name={'rubban'} ></Cousin>
      </section>

    </div>
  );
};

export default Aunty;