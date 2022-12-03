import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  imgSrc: StaticImageData
  caption: string
}

const ProjectFigure = ({ imgSrc, caption }: Props): JSX.Element => {
  return (
    <figure className="mt-6">
    <div className="grid grid-cols-1 lg:px-40">
      <div>
        <Image src={imgSrc} alt={caption}/>
        <figcaption className="text-center italic">{caption}</figcaption>
      </div>
    </div>
  </figure>
  )
}

export default ProjectFigure
