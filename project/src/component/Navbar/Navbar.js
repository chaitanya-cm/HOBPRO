import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import one1 from '../../images/1.svg';
import two2 from '../../images/2.svg';
import three from '../../images/3.svg';
import four from '../../images/4.svg';
import proImg from '../../images/black.svg'
import { FaRegHeart } from 'react-icons/fa'

import v1 from '../../images/Vector1.svg'
import v2 from '../../images/Vector2.svg'
import v3 from '../../images/Vector3.svg'

import videoImg from '../../images/videoBG.svg'
import and from '../../images/and.svg'


import one from '../../images/Logo.svg';
import two from '../../images/wallpaper1.svg';
// import like from'../../images/1.svg';
// import bag from '../../images/1.svg';


const Navbar = () => {

  const product =[
      {
        id:1,
        title: 'Collection Name',
        image: proImg,
        productname: 'Product Name',
        price : 'Price'
      },
      {
        id:2,
        title: 'Collection Name',
        image: proImg,
        productname: 'Product Name',
        price : 'Price'
      },
      {
        id:3,
        title: 'Collection Name',
        image: proImg,
        productname: 'Product Name',
        price : 'Price'
      },
      {
        id:4,
        title: 'Collection Name',
        image: proImg,
        productname: 'Product Name',
        price : 'Price'
      }
    ]
  
  
    return(
      <>
     
      {/* D CODE */}

      <nav className="navbar navbar-light">
    <div className='bag-icon'>
      {/* <img classname='img4'src={bag} alt=""/> */}
    </div>
    <div className='like-icon'>
      {/* <img  className='img3'src={like} alt=""/> */}
    </div>
    
  </nav>

  <div className='wallpaper'>
    <div>
    <img className='img2' src={two} alt=""/>
    </div>
    
  </div>
      {/* D CODE END */}
        <div className='container mt-0 bg-dark text-white' style={{height:500}}>
          <div className='banner'>
            <h1 className='float-end ms-5 mt-5'>“INDIA’S FIRST<br/>SUSTAINABLE<br/>FASHION AND <br/>LIFESTYLE<br/> COMMUNITY FOR <br/>THE YOUTH”</h1> 
              <div className='banner-img'>
                <img className='img1' src={four} alt="" />
                <img className='img2' src={two2} alt="" />
                <img className='img3' src={three} alt="" />
                <img className='img4' src={one1} alt="" />
                
              </div>
              
        <button className='d-flex btn btn-dark border-white fw-bold float-end position-absolute start-50'>Know More</button>
         </div>  
        </div> 

        
        <div className='feature-prod container p-3 mb-5 '>
          <div className='container p-4 bg-warning text-white  float-start' style={{width:500}}>
          </div>
          <div className='container p-4 bg-warning text-white float-end' style={{width:500}}>
          </div>
          <div className='text-center'>
            <h1 className='fw-bolder'>
              FEATURED <br/>PRODUCT
            </h1>
          </div>
          {product.map((item)=>{
          return(
            <div className="container ">
              <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
              <div className='card '>
                <button className='btn bg-transparent border-0 icon '><FaRegHeart className='Hicon'/></button>
                <img src={item.image} alt="" className='card-img' /> 
                <div className='card-body ms-5'>
                <h6 class="card-title">{item.title}</h6>

                <div className='ms-5'>
                  <div className='ms-5 '>
                    <div className='ms-5 '>
                <button className='btn btn-warning float-end ms-5 border-dark fw-bold rounded-0'>Shop Now</button>
                    </div>
                  </div>
                </div>
                <h5 className='card-text'>{item.productname}</h5>
                <h6 class="card-title">{item.price}</h6>
                </div>
                </div>
              </div> 
              </div>
            </div>
            
          );
        } )}
          
        <div>
          <button className='btn btn-dark border-white position-absolute start-50'>View All</button>
        </div>
        </div>
        
        <div className='container' >
          <div className='videoPlayer' style={{width:1125}}>
              <img src={videoImg} />
              <div className='bg-dark text-white d-flex align-items-center justify-content-center ' style={{height:80,width:1125}}>
                <h2>for HUSTLERS</h2>
                </div><br/>
          </div>
          <div className='colordiv bg-warning text-white d-flex align-items-center' style={{height:80,width:1125}}>
            <h2 className='text-primary text-center position-absolute start-50 fw-bold'>for DREAMERS</h2>
            </div><br />
          <img className='and-img' src={and} alt='' />
          <div className='colordiv bg-danger text-white text-center text-wrap d-flex align-items-center' style={{height:80,width:1125}}>
            <h2 className='position-absolute end-50 fw-bold'>for BABAS</h2>
          </div>
        </div>

        <div className='container mt-5 '>
          <div className='row d-flex justify-content-center'>
            <div className='col-1'>
              <img className='d-flex justify-content-center ms-3' src={v1} alt=''  style={{height:100}} />
              <h1 className='d-flex justify-content-start fw-bold'>10LT</h1>
              <h5>Water Saved</h5>
            </div>
            <div className='col-1'>
            <img className='d-flex justify-content-center ms-2' src={v2} alt=''  style={{height:100}} />
            <h1 className='d-flex justify-content-start fw-bold'>500KG</h1>
              <h5 className='d-flex position-absolute'>Fashion Waste Recycled</h5>
            </div>
            <div className='col-1'>
            <img className='d-flex justify-content-center' src={v3} alt='' style={{height:100}} />
            <h1 className='d-flex justify-content-start fw-bold'>2000</h1>
              <h5>Happy Babas</h5>
            </div>
          </div>
        <div className='btn2 position-absolute start-50 me-5'>
            <button className='d-flex btn btn-dark border-white'>Know More</button>
          </div>
        </div>

{/* D Code */}
          <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
  <ul className="nav flex-column text-white w-100">
   
    <div className='logo'>
        <img className='img1' src={one} alt=""/>
    </div>
    <div className='border'>
        <div className='inner-div'>

        </div>
    </div>

    <li href="#" class="nav-link">
      <span class="mx-2">COLLECTION</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">HOB MAGAZINE</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">COLLEGE CONNECT</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">WHO ARE WE?</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">JOIN LIFESTYLE</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">CONTACT US</span>
    </li>
  </ul>
</div>
{/* D Code end*/}


      </>  
    );
}

export default Navbar