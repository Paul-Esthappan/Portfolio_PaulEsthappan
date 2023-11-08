import React from 'react'
import aa from '../assets/aa.png'
import ab from "../assets/ab.jpg";
import ac from "../assets/ac.jpg";
import ad from "../assets/ad.jpg";
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-1">
      <h1 className="text-4xl py-1 font-bold text-center text-blue-900">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum sapiente
        id magnam alias, neque aliquam excepturi est sunt. Provident
        exercitationem illo deleniti laborum itaque. Nobis assumenda ipsam
        facere nesciunt nulla?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems img={aa} title="SocialMedia" />
        <ProjectItems img={ab} title="E-comerce" />
        <ProjectItems img={ac} title="Vedio plateform" />
        <ProjectItems img={ad} title="Company Website" />
      </div>
    </div>
  );
}

export default Projects