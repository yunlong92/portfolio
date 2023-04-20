import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-phone"></i>

            <div>
               
                <span className="about__subtitle">0737271249</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-envelope"></i>

            <div>
              
                <span className="about__subtitle">Yun.Long5209@gmail.com</span>
            </div>
        </div>


    </div>
  )
}

export default AboutBox