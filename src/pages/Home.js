import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css";
import { GitHub, VerifiedUserRounded } from "@material-ui/icons";
import profile_pic from  "../assets/profile_pic.png"


function Home() {
  return (
    <div className="home">
      <div className="about">
        <br/>
        <img src={profile_pic} width="180" height="180"/>
        <h2> Hi, My Name is Aazim</h2>
        <div className="prompt">
          <p>Cloud Engineer, Responsible for the configuration and maintenance of a cloud infrastructure.</p>
            <div className="socialMedia">
              <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/aazim-athar/')}/>
              <GitHub onClick={() => window.open('https://github.com/aazim-github/')}/>
              <VerifiedUserRounded onClick={() => window.open('https://www.credly.com/users/aazim-athar')}/>
            </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h4>Cloud Service Providers</h4>
            <span>
              Azure, AWS, OpenStack
            </span>
          </li>
          <li className="item">
            <h4>Programming Languages</h4>
            <span>
              GO, Python, Java 
            </span>
          </li>
          <li className="item">
            <h4>Development and Operations Skills</h4>
            <span>(CI/CD), Azure, Docker and Jenkins</span>
          </li>
          <li className="item">
            <h4>Containerization Platform</h4>
            <span>
              Azure Kubernetes Service (AKS), Docker 
            </span>
          </li>
          <li className="item">
            <h4>Operating Systems</h4>
            <span>
              Linux, Windows 
            </span>
          </li>
          <li className="item">
            <h4>Database Skills</h4>
            <span>
              Microsoft SQL Server (SSMS), MongoDB 
            </span>
          </li>
          <li className="item">
            <h4>Version Control</h4>
            <span>
              Git, Team Foundation Server (TFS) and GitHub
            </span>
          </li>
          <li className="item">
            <h4>IDE's and Source</h4>
            <span>
              Azure DevOps (Project Management), Lens(Kubernetes IDE), Visual Studio, Visual Studio Code 
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
