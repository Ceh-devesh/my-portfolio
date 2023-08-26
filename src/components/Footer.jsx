import React from 'react'
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer>
        Copyright © 2022. All rights are reserved 

      <a href="https://github.com/Ceh-devesh" target='_blank' rel="noopener noreferrer" ><GrGithub className='github'/></a>
      <a href="https://www.linkedin.com/in/devesh-kumar-b93451285/" target='_blank' rel="noopener noreferrer" ><FaLinkedin className='linkdin' /></a>
        
      </footer>
    </div>
  )
}

export default Footer
