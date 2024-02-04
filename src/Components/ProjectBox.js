import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub : "https://github.com/DevanshSahni/tindog",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    Bios_Information_GatheringDesc :"This Project aims in to extract and analyze system BIOS data, providing valuable insights into hardware configurations, firmware versions, and Description security vulnerabilities. This initiative aims to enhance system administrators' ability to manage and secure computer systems effectively.",
    Bios_Information_GatheringGithub:"",
    NewsletterWebsite:"",
    
    Hardware_ForensicsDesc:"A Portable, Virtualized Intel NUC (Next Unit of Computing) device with the following features memory Forensics Disk Forensics Network Forensics Multi - operating system support (Windows, Linux) User-friendly Tool Launcher Interface to launch a comprehensive set of forensic tools on each OS platform for investigation Detailed PDF report for each investigative session. Integrated with cloud storage to save data and findings of investigation.",
    HardwareGithub:"",
    HardwareWebsite:"",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        {/* <img className='projectPhoto' src={projectPhoto} alt="Project display" />  */}
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
{/* 
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:show}} href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox