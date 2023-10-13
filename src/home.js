import React from 'react'
import logo from './1.png'
import { Link } from 'react-router-dom';
export default function () {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-info bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
    <img className='logo img-responsive w-40' src={logo}/>
    
    <form className="form-inline my-2 my-lg-0 fm-w">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for the products, Brands and more" aria-label="Search" />
    </form>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <Link to='Forms'><li><i className='fa fa-house'></i><span>Home</span></li></Link>
             
              <li><i className='fa fa-bolt'></i><span>Become a seller</span></li>
                <li><i className='fa fa-film'></i><span>Sign in</span></li>
              <li><i className='fa fa-solid fa-user'></i><span>Cart</span></li>
    </ul>
  </div>
</nav>
    </>
  )
}