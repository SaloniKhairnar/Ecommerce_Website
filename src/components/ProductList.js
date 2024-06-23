import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    return (
        <>
        <h4 className="w-100 px-3 products mt-2">Our Products</h4>
            <div className="product-list row m-0 px-3">
                
                {products.map(product => (
                    <div key={product.id} className="product-item my-2">
                        <Link to={`/product/${product.id}`}>
                            <div className="product-image p-3">
                                <img src={product.urls.small} alt={product.alt_description}></img>
                            </div>
                            <div className="product-details">
                                <h4 className="text-truncate" title={product.alt_description}> {product.alt_description}</h4>
                                <div className="row m-0 justify-content-between"><p><b className="pr-2">Price :</b>$ {product.height}</p> <button className='btn mx-1 cartbtn'><i className="fa fa-cart-plus"></i> </button> {/*Add to Cart button*/}</div>
                                <h6 className="text-truncate">{product.description}</h6>
                            </div>
                            <div className='action-buttons row m-0'>
                                
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}
export default ProductList;