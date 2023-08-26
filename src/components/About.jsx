import React from 'react'
import aboutGif from '../assets/me.jpg'

function About() {
  return (
    <div id='about' >
        <h4>ABOUT ME</h4>
        <h1>A dedicated Front-end Developer
based in New Delhi, India</h1>
        <div className='aboutme'><p>As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>
        </div>
        <img src={aboutGif} alt="" />
    </div>
  )
}

export default About
