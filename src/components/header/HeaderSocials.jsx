import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="hhtps://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="hhtps://github.com" target="_blank"><FaGithub /></a>
        <a href="hhtps://dribbble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials