import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/realwako'><BsTwitter /></a>
        </div>
        <div>
            <a href='https://instagram.com/wako_iii'><BsInstagram /></a>
        </div>
        <div>
            <a href='https://linkedin.com/in/wako-anindo-02341455/'><AiFillLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia