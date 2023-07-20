import React from 'react';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between mt-2">
        <div class="container-fluid">
            <a class="navbar-brand text-black" href="#">Menu</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
        <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link text-black text-decoration-underline mt-2" aria-current="page" href="/">Home</a>
                    <a class="nav-link text-black text-decoration-underline" href="/products">Products</a>
                    <a class="nav-link text-black text-decoration-underline" data-formkit-toggle="b41f37c546" href="https://rosini-shop.ck.page/join">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
};

export default Navbar;