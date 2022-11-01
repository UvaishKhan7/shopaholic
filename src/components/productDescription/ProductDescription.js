import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Description.css'

export default function ProductDescription({ addToCart }) {

  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div>
        <div className="d-flex flex-row text-center justify-content-evenly align-items-center mx-5 my-3">
          <img src={product.image} className="img-responsive my-3" alt={product.title} width={280} />
          <div className="descOuter my-5 d-flex flex-column align-items-center">
            <h4 className="my-3 ">{product.title}</h4>
            <h5 className="text-info bg-dark rounded-pill py-2 px-3 fw-bold price">Price: $ {product.price}/-</h5>
            <p className="my-2 mx-5">{product.description}</p>
            <button className="btn btn-primary my-1" onClick={()=> addToCart(product)}>Add to cart</button>
            <div className="d-flex justify-content-evenly my-1">
              <span className="d-flex align-items-center">
                <strong>Ratings : &nbsp;</strong>
                <span className=" text-success fs-1">
                  {product?.rating?.rate}
                </span>
              </span>
              <span className="d-flex align-items-center">
                <strong>Verified Buyers : &nbsp;</strong>
                <span className=" text-success fs-1">
                  {product?.rating?.count}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
