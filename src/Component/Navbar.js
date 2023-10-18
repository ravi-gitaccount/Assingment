import React from 'react'
import './Sidecomponent/Nav.css'
const Navbar=()=>{

    return(
    <>
  <div class="container-fluid">
    <div class="row">
   
    <div class="col-sm-2" style={{backgroundColor:"blue",height:"703px"}}>
    <div className="sidebar">
     <h5 style={{color:"white",marginTop:"18px"}}><i class="fa fa-dashcube" aria-hidden="true"></i> Dashboard</h5> <br/>
     <a href="#Product" class="active"><i class="fa fa-product-hunt" aria-hidden="true"></i> Product <i class="fa fa-chevron-right side_nav0" aria-hidden="true"></i></a>
     <a href="# Customers"><i class="fa fa-fw fa-user"></i>Customers <i class="fa fa-chevron-right side_nav1" aria-hidden="true"></i></a>
     <a href="#Income"><i class="fa fa-google-wallet" aria-hidden="true"></i>  Income <i class="fa fa-chevron-right side_nav2" aria-hidden="true"></i></a>
     <a href="#Promatet"><i class="fa fa-percent" aria-hidden="true"></i>  Promate <i class="fa fa-chevron-right side_nav3" aria-hidden="true"></i></a>
     <a href="#Help"><i class="fa fa-question-circle" aria-hidden="true"></i> Help <i class="fa fa-chevron-right side_nav4" aria-hidden="true"></i></a>
     <div class="manager">
      <h6 class="Name"><i class="fa fa-user-circle" aria-hidden="true"></i> Ravi<i class="fa fa-chevron-down dropdown" aria-hidden="true"></i></h6>
      <p class="promanager">Product Manager</p>
       
    </div>
    </div>
    </div>

    <div class="col-sm-10">
     <div class="row">
      <div class="col   bg-primary text-white"> <h6 class="user">Hello Ravi <i class="fa fa-hand-paper-o" aria-hidden="true"></i></h6></div>
      <div  class="col  bg-dark text-white"> <input  class="search" type='text' placeholder="search"></input> </div>
     </div>

     <div class="row">
      <div class="col bg-primary m-2">.col</div>
      <div class="col p-3 bg-dark m-2">.col</div>
      <div class="col p-3 bg-primary m-2">.col</div>
      <div class="col p-3 bg-dark text-white m-2">.col</div>
     </div>
       
     <div class="row">
      <div class="col-sm-8 bg-primary m-2">.col8</div>
      <div class="col-sm-3 bg-dark ">.col8</div>
     </div>
    </div>
    </div>
    </div>

    


    </>
    )
}

export default Navbar;