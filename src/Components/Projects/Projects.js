import React, { useState } from 'react'
import "./project.scss"

import Hireit from "../../images/Hire-It.png";
import Blogwebsite from "../../images/blog-website.png";
import Socialane from "../../images/Socialane.png";
import Moviedashboard from "../../images/Movie-Dashboard.png";
import Musicdashboard from "../../images/Music-Dashboard.png";
import Smartdashboard from "../../images/Smart-Dashboard.png";

const Projects = () => {
    const [currentOption, setCurrentOption] = useState("Web Development");

    const projectsList = [
        {
            name: "Hire It - Job Portal",
            tech: "React JS, SCSS, Node JS, Mongo DB",
            link: "https://job-portal-client-nilesh133.vercel.app/",
            image: Hireit,
            category: "Web Development"
        },
        {
            name: "Blog Website",
            tech: "React JS, SCSS, Node JS, Mongo DB",
            link: "https://blog-website-nilesh133.vercel.app/",
            image: Blogwebsite,
            category: "Web Development"
        },
        {
            name: "Socialane - Social Media App",
            tech: "React JS, CSS, Node JS, Mongo DB",
            link: "https://socialane-client-nilesh133.vercel.app/",
            image: Socialane,
            category: "Web Development"
        },
        {
            name: "Movie Dashboard",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Movie-Dashboard/",
            image: Moviedashboard,
            category: 'UI Designs',
        },
        {
            name: "Music Dashboard",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Music-Dashboard/",
            image: Musicdashboard,
            category: 'UI Designs'
        },
        {
            name: "Smart Home Dashboard",
            tech: "React JS, SCSS",
            link: "https://nilesh133.github.io/Smart-Home-Dashboard/",
            image: Smartdashboard,
            category: 'UI Designs'
        },
    ]

    const handleCurrentOptionChange = (e) => {
        setCurrentOption(e.target.innerText);
        console.log(currentOption)
    }

    return (
        <div className='projects'>
            <div className='projects_heading'>
                <h3>Develop Works</h3>
                <span>Our Works</span>
            </div>
            <div onClick={(e) => handleCurrentOptionChange(e)} className='projects_options'>
                <h3 style={{ backgroundColor: currentOption === "Web Development" ? "#f9004d" : 'transparent' }}>Web Development</h3>
                <h3 style={{ backgroundColor: currentOption === "UI Designs" ? "#f9004d" : 'transparent' }}>UI Designs</h3>
                <h3 style={{ backgroundColor: currentOption === "UX Designs" ? "#f9004d" : 'transparent' }}>UX Designs</h3>
                <h3 style={{ backgroundColor: currentOption === "Graphic Designs" ? "#f9004d" : 'transparent' }}>Graphic Designs</h3>
            </div>
            <div className='projects_list'>
                {
                    projectsList.map((projectDetails) => (
                        <div>
                            {
                                projectDetails.category === currentOption ? <div className='projects_list_singleproject'>
                                    <div className='projects_list_singleproject_link'>
                                        <div className='projects_list_singleproject_link_image' style={{ backgroundImage: `url(${projectDetails.image})` }}></div>
                                    </div>
                                    <div className='projects_list_singleproject_detail'>
                                        <h3>{projectDetails.name}</h3>
                                        <p><span>Tech Used:</span> {projectDetails.tech}</p>
                                        <button><a href = {projectDetails.link}>View Project</a></button>
                                    </div>
                                </div> : ""
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects