import React from 'react'
import { Project } from '../types'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
}

const ProjectGrid = ({ projects }: Props): JSX.Element => {
  return (
    <div className="lg:mx-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {
          projects.map((project: Project) => {
            return <ProjectCard key={project.id} project={project}/>
          })
        }
    </div>
  )
}

export default ProjectGrid
