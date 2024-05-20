
import { awardWinningImg } from '../../assets/images';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import React from 'react'

const AwardWinnning = () => {
  return (
    <>
           <section className='award_winning_section'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-6 mb-4'>
                <div className="chartImage">
                    <img className="mw-100" src={awardWinningImg}></img>
                </div>
                </div>

                <div className='col-md-6 mb-4'>
                <div className="award_content">
                <h1>AWARD WINNING</h1>
                <p> Our award winning programs have made student’s reach their optimum potential leading to best
                    career paths.</p>
            </div>
                </div>
            </div>
        </div>
            </section>

            {/* <section className='questions_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>850+</h2>
                                        <h3 className="mt-2">Work Books<br/>&amp;<br/>Practice Test</h3>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>10,000</h2>
                                        <h3 className="mt-2">Video lectures</h3>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>40,000<FontAwesomeIcon icon={faPlus} /></h2>
                                        <h3 className="mt-2">Video lectures</h3>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>Successful admissions</h2>
                                        <h3 className="mt-2">to advanced programs</h3>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </>
     
  )
}

export default AwardWinnning