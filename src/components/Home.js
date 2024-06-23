import React from 'react';
import sliderImage from '../images/handheld-devices.png'
import { Link } from 'react-router-dom';
import laptopImg from '../images/laptop.png';
import mobileImg from '../images/mobile.png';
import headphnImg from '../images/headphones.png';
import watchImg from '../images/sports-watch.png';

const Home = () => {
    return (
        <>
        <div className='top-banner mt-2'>
            <div className='container'>
                <div className='details my-auto ml-3 zoom-in'>
                    <h2>The Best Electonic Gadgets Collection of 2024 </h2>    
                   <p className='btn shopbtn'><Link to ='/products'>Shop Now <i className='fa fa-arrow-circle-right px-2'></i></Link></p>                
                </div>
                <div className='img_box'>
                    <img src={sliderImage} alt='sliderimg' className='img-fluid'/>
                </div>
            </div>

        </div>
        <hr></hr>
        <div className='row m-0 category-container px-4'>
            <div className='categories p-2 text-center'>
            <Link to ='/products'>
                <img src={laptopImg} alt='category 1' className='img-fluid mt-2 p-1'/>
                <p><b>Laptops</b></p>
                </Link>
            </div>
            <div className='categories p-2 text-center'>
            <Link to ='/products'>
                <img src={mobileImg} alt='category 1' className='img-fluid mt-2 p-1'/>
                <p><b>Mobiles</b></p>
                </Link>
            </div>
            <div className='categories p-2 text-center'>
            <Link to ='/products'>
                <img src={headphnImg} alt='category 1' className='img-fluid mt-2 p-1'/>
                <p><b>Headphones</b></p>
                </Link>
            </div>
            <div className='categories p-2 text-center'>
            <Link to ='/products'>
                <img src={watchImg} alt='category 1' className='img-fluid mt-2 p-1'/>
                <p><b>Smart Watch</b></p>
                </Link>
            </div>

        </div>
        </>
    );
}

export default Home;