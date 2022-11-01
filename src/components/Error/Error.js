import React from 'react';
import Logo from '../../images/Shopaholic-gif.gif';
import './Error.css'

function Error() {
  return (
    <div className='container text-center my-4'>
      <img src={Logo} alt="" width={350}/>
      <p className='err-ttl my-3'>404: ERROR</p>
      <p className='err-msg fs-3'>Page Not Found!</p>
    </div>
  )
}

export default Error;
