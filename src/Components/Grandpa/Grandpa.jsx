import Aunty from '../Auntry/Aunty';
import Daddy from '../Daddy/Daddy';
import Uncle from '../Uncle/Uncle';
import './grandpa.css'

const Grandpa = () => {
  const asset = 'diamond';

  return (

    <div className="grandpa text-center  ">
      <h2>Grandpa</h2>
      <section className='flex' >
        <Daddy asset={asset} ></Daddy>
        <Aunty></Aunty>
        <Uncle></Uncle>
      </section>

    </div>


  );
};

export default Grandpa;