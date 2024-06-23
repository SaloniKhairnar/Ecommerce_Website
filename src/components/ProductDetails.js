import React , {useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const access_key='9rMNU5-QqNx4tAdwfmwDGggygaSbuH1DAFO_N5nXy8c'
const ProductDetails = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const[product, setProduct]=useState(null);

    useEffect(()=>{
        const fetchImageDetails=async()=>{
            try{
                const response=await axios.get(`https://api.unsplash.com/photos/${id}`,
                    {headers:{
                        Authorization:`Client-ID ${access_key}`}});
                    console.log(response.data)
                    setProduct(response.data)
            }
            catch(error){console.error('Error fetching the product details:',error)};
        }
        fetchImageDetails();        
    },[id]);

    if(!product) return<div>Loading...</div>;

    return (
    
        <div className='product-details px-3 row m-0'>
            <div className='product-image col-lg-6 col-md-5 col-12'>
            <img src={product.urls.regular} alt={product.alt_description}/>
            </div>            
            <div className='product-info px-2 col-lg-6 col-md-7 col-12 '>
            <h3 className='font-weight-bold'>{product.description}</h3>          
            <h6>{product.alt_description}</h6>          
            <p>{product.user.name}</p>
            {/* <div className='row m-0'> */}
            <div className='w-100 row m-0'><p className='font-weight-bold px-1'>Price : </p><p>${product.height}</p></div>
            <div className='w-100 row m-0'><p className='font-weight-bold px-1'>Likes :</p><p>{product.likes} <i className='fa fa-heart-o px-1'></i></p></div>
            {/* </div> */}
            {/* <p>Categories :{product.categories.map(category => category.title).join(', ')}</p>
            <p>Tags :{product.tags.map(tag =>tag.title).join(', ')}</p> */}
            <div className='action-buttons row m-0'>
             <button className='btn btn-secondary mx-1'>Add to Cart </button> {/*Add to Cart button*/}
             <button className='btn btn-warning mx-1'>Buy Now </button> {/*Buy Now button*/}
             <button className='btn btn-dark mx-1' onClick={()=>navigate(-1)} ><i className='fa fa-arrow-circle-left pr-2'></i>Back to List </button> {/*Back to list button*/}
            </div>
            
           
        </div>
    </div>
);
}
export default ProductDetails;