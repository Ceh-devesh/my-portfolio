import React from 'react'
import html from '../assets/html-logo.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import btstp from '../assets/bootstrap.png'
import sql from '../assets/mysql.png'
import vsc from '../assets/vscode.png'
import fgma from '../assets/figma.png'
import git from '../assets/github.png'
import mdb from '../assets/mongo.png'
import sass from '../assets/sass-logo.png'
import nodejs from '../assets/node-logo.png'
function Skill() {
  return (
    <div id='skill' >
      <div id='skillBox1' >
      <h4 className='skill-heading' >Tech Stack</h4>
      {/* <h2>My Toolbox & Things I can do</h2> */}
      {/* <p>THE SKILLS, TOOLS TECHNOLOGIES I USE TO BRING YOUR PRODUCTS TO LIFE</p> */}
      </div>
      <div className='skillBox2' >
        <img className='img1' src={html} alt="" />
        <img className='img2' src={css} alt="" />
        <img className='img2' src={sass} alt="" />
        <img className='img3' src={js} alt="" />
        <img className='img4' src={react} alt="" />
        <img className='img5' src={btstp} alt="" />
        <img className='img6' src={vsc} alt="" />
        <img className='img7' src={fgma} alt="" />
        <img className='img8' src={git} alt="" />
        <img className='img9' src={sql} alt="" />
        <img className='img10' src={mdb} alt="" />
        <img className='img10' src={nodejs} alt="" />
        
      </div>

    </div>
  )
}

export default Skill
