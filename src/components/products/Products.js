
import { Link } from "react-router-dom";
import './products.css';

export default function Products(props) {

    return (
        <>
            <div className="productsWrapper d-flex flex-wrap justify-content-center">
                {props.filter.map((product) => (
                    <div key={product.id} className='m-3 border border-2 rounded'>
                        <div className="d-flex flex-column align-items-center" style={{ width: '18rem' }}>
                            <Link to={`/products/${product.id}`} state={product} className='text-decoration-none justify-content-center link'>
                                <div className="imageOuter text-center">
                                    <img src={product.image} className="card-img-top img-responsive" alt="..." />
                                </div>
                                <div className="card-body text-center d-flex flex-column align-items-center py-0 px-3">
                                    <h6 className="text-decoration-none">{product.title.slice(0, 44)}</h6>
                                    <p className="text-info bg-dark rounded-pill py-1 px-3 fw-bold price">Price: ${product.price}</p>
                                </div>
                            </Link>
                            <button className="text-center btn btn-primary mb-3" onClick={() => props.addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))
                }
            </div >
        </>
    );
}
