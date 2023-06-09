import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className='row'>
            <div className="col-6">
              <p className='text-white mb-0'>FreeShipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:+91 8264954234">+91 8264954234</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input className='form-control py-2' placeholder='Search product here...' type="text" aria-describedby='basic-addon2' />
                <span className='input-group-text p-3' id='basic-addon2'><BsSearch className='fs-4' /></span>
              </div>
            </div >
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex flex-column align-items-center  text-center'>
                    <img src='/images/compare.svg' alt='compare' />
                    <p className='text-white mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex flex-column align-items-center  text-center'>
                    <img src='/images/wishlist.svg' alt='wishlist' />
                    <p className='text-white mb-0'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex flex-column align-items-center text-center'>
                    <img src='/images/user.svg' alt='user' />
                    <p className='text-white mb-0'>Login <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex flex-column align-items-center gap-10 text white  text-center'>
                    <img src='/images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='text-white mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="images/menu.svg" alt=""/><span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item text-white" to="">Action</Link>
                      <Link className="dropdown-item text-white" to="">Another action</Link>
                      <Link className="dropdown-item text-white" to="">Something else here</Link>
                    </div>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className="text-white" to="/">Home</NavLink>
                    <NavLink className="text-white" to="/">Our Store</NavLink>
                    <NavLink className="text-white" to="/">Blogs</NavLink>
                    <NavLink className="text-white" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header