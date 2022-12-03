import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  title: string
  imgSrc: StaticImageData
}

const ProjectCover = ({ title, imgSrc }: Props): JSX.Element => {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-2 place-items-center bg-gray-100 lg:mx-0">
      <div>
        <h1 className="lg:text-3xl text-xl font-bold px-12 text-center py-4 lg:py-0">
          {title}
        </h1>
      </div>
      <div className="col-span-2 bg-gray-200 w-full">
          <Image className="object-fill" src={imgSrc} alt={title}/>
      </div>
    </div>
  )
}

export default ProjectCover
