import React, { useState } from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Grab a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:wakoanindo@outlook.com" className="p-text">wakoanindo@outlook.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+44 (51) 263-8080" className="p-text">+44 (751) 263-8080</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "footer",
  "app__whitebg"
)