import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import logo from "../Assets/logo.jpeg";
import "../Styles/Home.css";

console.log(logo);

function Home() {
  return (
    <div className="home">
        
        
        <div className='about'>
            <img src={logo} width="80%" alt = "Me"/>
            <h2>I-ENG</h2>
            
            <div className="prompt"> 
                <p> 
                  Your Visions, Engineered.
                </p>
                <a href="https://www.linkedin.com/in/kang-wen/">
                    <LinkedInIcon />
                </a>
                <a href="mailto:kangwenca@gmail.com">
                    <EmailIcon />
                </a>
            </div>
        </div>
        
        
        <div className='services'>
          <h3>Professional Engineering Services</h3>
           
            <ul className='list'>
                <b className="item">
                    <h2>Mechanical Design</h2>
                    <span> Simple machined components to complicated machinery such as structural weldments/skid, powertrain, rotating assembly, & testing jigs</span>
                </b>
                <b className="item">
                    <h2>P&ID</h2>
                    <span>P&ID development; piping and vessel sizing; hand valve, control valve sizing, and instrumentation selection</span>
                </b>
                <b className="item">
                    <h2>FEA</h2>
                    <span>FEA (Ansys) to structural & thermal applications, static & dynamic (transient)</span>
                </b>
                <b className="item">
                    <h2>CAD Modeling</h2>
                    <span> 3D/2D CAD Modeling in SolidWorks & AutoCad</span>
                </b>
                
            </ul>
        </div>
    </div>
  )
}

export default Home