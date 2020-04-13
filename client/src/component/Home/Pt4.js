import React from 'react';
import orsys from '../../foundation/home/orsys.png';
import PLB from '../../foundation/home/logoPlb.png';
import ib from '../../foundation/home/ib.png';

function Pt4() {
  return (
    <div className='bg-info'>
      <div className='container'>
        <div className='row  pt-2 pb-2'>
          <div className='col-md-4 pt-4 pb-3'>
            <center>
              <a href='https://www.orsys.fr/' target='_blanc'>
                <img src={orsys} alt='' />
              </a>
            </center>
          </div>
          <div className='col-md-4 pt-4 pb-3'>
            <center>
              <a href='https://www.plb.fr/' target='_blanc'>
                <img src={PLB} alt='' />
              </a>
            </center>
          </div>
          <div className='col-md-4 pt-4 pb-3'>
            <center>
              <a href='https://www.ib-formation.fr/' target='_blanc'>
                <img src={ib} alt='' />
              </a>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pt4;
