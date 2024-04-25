/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 16/09/2023 - 01:41:59
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import React from 'react'
import { Link } from 'react-router-dom'

export const HomeCategory = (props) => {
  return (
    <section className="first_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-md-12">
            <div className="content_div">
              <div className="d-flex justify-content-between align-items-center">
                <h1>best sellers</h1>
                <div className="actionBtn">
                  <a href="https://custom3.mystagingserver.site/gowri_vemuri_clone/public/books-listing">Explore All</a>
                </div>
              </div>
              <p> Practice makes it perfect. Practice questions on each concept helps the students master over the
                topic. Our grade level books are aligned to respective state standards. Rigorous Curriculum is
                aligned across multiple weeks to ensure the mastery on grade level skills. </p>
            </div>



          </div>
          <div className="col-xl-4 col-md-12">
            <div className="sale_div">
              <h1>50% sale</h1>
              <p>Our two colorful full-length COGAT Online Practice Test in each volume, includes 9 subtests with
                bonus questions. <br />
                As the students do COGAT Testing Practice they learn a lot of new vocabulary in
                words and in pictorial forms as-well, thus making the tests more interesting. <br />
                Kid friendly format for getting an edge on the real test. <br />
                Detailed answer key is included. <br />Proven content has been used by many students over the
                years to ace the Critical Thinking COGAT test. <span>Now on
                  SALE</span></p>
              <div className="actionBtn mt-3">
                <a href="https://custom3.mystagingserver.site/gowri_vemuri_clone/public/books-listing">Buy Now</a>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
