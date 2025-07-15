import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      
        {/* <img src={assets.footer_logo} alt="Footer Logo" /> */}
        <p className='flex-1 border-gray-400 pl-4'>Created by MernBros © 2025 Job Portal | All rights reserved.</p>
        <div className='flex gap-2.5'>
            <a href="https://github.com/MERNBROS/local-job-connect" target="_blank" rel="noopener noreferrer">
                <img width={38} src={assets.github_mark} alt="GitHub Logo" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img width={38} src={assets.facebook_icon} alt="Facebook Logo" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img width={38} src={assets.instagram_icon} alt="Instagram Logo" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img width={38} src={assets.twitter_icon} alt="Twitter Logo" />
            </a>

        </div>
    </div>
  )
}

export default Footer
