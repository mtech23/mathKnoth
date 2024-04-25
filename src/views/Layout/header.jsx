/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 15/09/2023 - 22:33:15
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 15/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import { faChevronDown, faEnvelope, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="mobile-menu">
        <div className="mobile_login">
          <ul>
            <li><a href="javascript: void();" data="javascript:;"><i className="fa-solid fa-user"></i> My Account <i className="fa-solid fa-chevron-right"></i></a></li>
            <li><a href="javascript: void();" data="javascript:;" className="register_btn"> Register Now</a></li>
          </ul>
        </div>
        <div className="mobile-top">
          <div className="img-div">
            <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public">
              <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png" className="img-fluid" alt="" />
            </a>
          </div>
          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <div className="mobile_cart search_cart_div">
              <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/add-to-cart"><i className="fa-solid fa-cart-shopping"></i>
                <span className="currentCartCount">1</span></a>
            </div>
            <div className="circle " id="navbar">
              <p> <i className="fa fa-bars" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
        <div className="nveMenu text-left">
          <div className="mobile-cross close-btn-nav" id="navbar"><i className="fas fa-times" aria-hidden="true"></i></div>
          <div>
            <Link to="/"><img src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png" className="img-fluid" alt="" /></Link>
          </div>
          <ul className="navlinks p-0 mt-4">
            <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public">Home</a></li>
            <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/books-listing">Books</a></li>
            <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">Video Learning</a></li>
            <li><a href="javascript: void();" data="https://a4ace.com/home" target="_blank">Online Practice (a4ace)</a></li>
            <li className="dropdown2">
              <a onClick={() => mkFunction()} className="dropbtn2">MK Academy <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></a>
              {/* <div id="myDropdown2" className="dropdown-content2">
                <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing">Online Classes</a>
                <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/inPerson">InPerson Classes</a>
              </div> */}
            </li>
            <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/blogs-listing">Blogs</a></li>
            <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="headerTopLeft">
                <ul>
                  <li><a href="javascript: void();" data="mailto:Mathknots.help@gmail.com"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><span>Email:</span> Mathknots.help@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="headerTopRight">
                <ul>
                  <li><Link to="/login" className="register_btn">Login</Link></li>
                  <li><Link to="/user-registration" className="register_btn"> Register Now</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10" style={{ backgroundColor: "#fff" }}>
              <div className="row">
                <div className="offset-md-1 col-md-2">
                  <div className="logo-img text-right">
                    <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public">
                    <Link to="/"><img src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/logo.png" className="img-fluid" alt="" /></Link>
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="header_links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/books-listing">Books</a></li>
                    <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/video-learning">Video Learning</a></li>
                    <li><a href="javascript: void();" data="https://a4ace.com/home" target="_blank">Online Practice (a4ace)</a></li>
                    <li className="dropdown3">
                      <a onClick={() => mkFunction3()} className="dropbtn3">MK Academy <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></a>
                      {/* <div id="myDropdown3" className="dropdown-content3">
                        <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing">Online Classes</a>
                        <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/inPerson">InPerson Classes</a>
                      </div> */}
                    </li>
                    <li><Link to={'/blog-listing'}>Blogs</Link></li>
                    <li><a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="search_cart_div">
                <div className="dropdown">
                  <a onClick={() => myFunction()} className="dropbtn"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
                  <div id="myDropdown" className="dropdown-content">
                    {/* <form action="https://custom3.mystagingserver.site/gowri_vemuri/public/user-register" method="get" className="float-left">
                      <input type="text" className="form-control" name="header_search" value="" />
                      <div className="actionBtn">
                        <button>Search</button>
                      </div>
                    </form> */}
                  </div>
                </div>
                <a href="javascript: void();" data="https://custom3.mystagingserver.site/gowri_vemuri/public/add-to-cart"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                  <span className="currentCartCount">1</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
