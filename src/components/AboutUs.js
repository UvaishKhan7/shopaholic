import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mx-5 my-3">
                <div className="col-10 col-sm-8 col-lg-6">
                    <NavLink to='/'>
                        <img src="Shopaholic.gif" className="d-block mx-lg-auto img-fluid" alt="Shopaholic Logo" />
                    </NavLink>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">About Us</h1>
                    <p className="lead my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, saepe. Sequi cupiditate, ipsum, recusandae repellat incidunt ab impedit quo atque consequuntur consequatur esse nam! Velit dolorum magni, laudantium placeat rerum maxime tenetur quibusdam voluptas incidunt ratione suscipit numquam sequi repudiandae nam architecto officia odio reprehenderit vitae minima odit esse. Eius et natus quaerat sapiente fugit nobis unde obcaecati, dolore iure sequi id autem consectetur.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;