import React from 'react';

// External files
import {Navbar} from '../styled/index';

function Home() {
  return (
    <React.Fragment>
      <div>
        <Navbar/>

        <section className='row mt-5'>
          {/* TITLE */}
          <div className='col-12 mb-5'>
            <h1 className='text-center mt-5 pt-5'>Rosini Shop</h1>
          </div>

          {/* PRODUCTS BTN */}
          <div className='col-4'></div>
          <div className='col-4'>
            <a href='/products' className='text-dark'>
              <button className='btn btn-lg btn-dark w-100'>Products</button>
            </a>
          </div>
          <div className='col-4'></div>

          <div className='m-1'></div>

          {/* CONTACT BTN */}
          <div className='col-4'></div>
          <div className='col-4'>
            <a className='text-dark' data-formkit-toggle="b41f37c546" href="https://rosini-shop.ck.page/join">
              <button className='btn btn-lg btn-outline-dark w-100'>
                Contact
              </button>
             </a> 
          </div>
          <div className='col-4'></div>
        </section>
      </div>
    </React.Fragment>
  )
};

export default Home;