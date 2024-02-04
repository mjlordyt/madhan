import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Madhan M</h4>
      <h4>Copyright &copy; 2023 JS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/mjlordyt" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/madhan-m-939313250/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:madhanm21@karunya.edu.in' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer