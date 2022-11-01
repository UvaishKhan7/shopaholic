import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <img src="/Shopaholic.png" className='my-3' alt="logo" style={{ height: "50px" }} />
                <h1 className="display-5 fw-bold my-3">Contact Us</h1>
                <div className="col-lg-6 mx-auto my-5">
                    <p className="lead mb-4">For any kind of inquiry, you can contact on below mail or number</p>
                    <div className='my-3'>
                        <div className='my-2'>example@abc.com</div>
                        <div>+911234567890</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;