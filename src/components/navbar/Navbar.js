import React from 'react';
import Icon from '../../images/Shopaholic.png';
import cartLogo from '../../images/cart.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import Search from '../../images/search.svg';
import Account from '../../images/account.svg';

function Navbar(props) {
    return (
        <div className='navWrapper'>
            <nav className="navbar navbar-expand-lg fw-bold">
                <div className="container-fluid px-3">
                    <Link to='/' className=''>
                        <img src={Icon} alt="" width={100} className='icon' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between align-items-center navUl">
                            <div className='listWrapper d-flex'>
                                <li className="nav-item nav-list" onClick={() => props.setFilter(props.data)}>
                                    <span className="nav-link active link-txt" role="button">
                                        <Link to="/" className='text-decoration-none text-dark'>
                                            ALL
                                        </Link>
                                    </span>
                                </li>
                                <li className="nav-item nav-list men" onClick={() => props.filterProduct("men's clothing")}>
                                    <span className="nav-link active link-txt" role="button">
                                        MEN
                                    </span>
                                </li>
                                <li className="nav-item nav-list women" onClick={() => props.filterProduct("women's clothing")}>
                                    <span className="nav-link active link-txt" role="button">
                                        WOMEN
                                    </span>
                                </li>
                                <li className="nav-item nav-list elec" onClick={() => props.filterProduct("electronics")}>
                                    <span className="nav-link active link-txt" role="button">
                                        ELECTRONICS
                                    </span>
                                </li>
                                <li className="nav-item nav-list jewel" onClick={() => props.filterProduct("jewelery")}>
                                    <span className="nav-link active link-txt" role="button">
                                        JEWELERY
                                    </span>
                                </li>
                            </div>
                            <form className="d-flex searchWrapper" role="search">
                                <div className='d-flex searchInputOuter'>
                                    <img src={Search} alt="" width={20} />
                                    <input className="searchInput" type="search" placeholder="Search for products, brands & more" aria-label="Search" />
                                </div>
                            </form>
                            <div className='d-flex'>
                                <li className='nav-item mx-3'>
                                    <Link to='/profile' className='text-decoration-none'>
                                        <div className="nav-link active link-txt text-center fw-normal">
                                            <img src={Account} alt="" width={25} />
                                            <p>
                                                Profile
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/cart' className='text-decoration-none'>
                                        <div className="nav-link active link-txt text-center fw-normal">
                                            <img src={cartLogo} alt="" width={25} />
                                            <div className="cartVal d-flex">
                                                <p>Cart</p>
                                                <div className='mx-2 badge rounded-pill bg-danger'> {props.count} </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
