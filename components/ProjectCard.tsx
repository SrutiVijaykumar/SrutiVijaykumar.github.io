import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../types'

interface Props {
  key: number
  project: Project
}

const ProjectCard = ({ project }: Props): JSX.Element => {
  return (
  <div className="bg-white rounded-sm shadow-md">
  <div className=" grid place-items-center">
    <div className="overflow-hidden rounded-sm m-4">
      <Image
        className=" h-72 w-72 object-cover hover:opacity-75 transform duration-700 ease-in-out hover:scale-110"
        src={`${project.image.src}`}
        alt={ project.image.description }
        width={288}
        height={288}
      />
    </div>
  </div>

  <section className="mx-4">
    <Link href={project.cta.link } className="hover:no-underline focus:no-underline underline text-brand">
      <h3 className="text-2xl font-bold py-4 text-brand">{project.title}</h3>
    </Link>
    <p className="text-gray-500 pb-8">{project.description}</p>
  </section>
</div>
  )
}

export default ProjectCard
