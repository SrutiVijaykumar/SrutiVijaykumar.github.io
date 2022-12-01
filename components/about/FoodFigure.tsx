import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  imgSrc: StaticImageData
  caption: string
}

const FoodFigure = ({ imgSrc, caption }: Props): JSX.Element => {
  return (
    <figure className="text-center">
    <Image className="shadow-lg rounded-full h-48 w-48 object-cover m-auto" src={imgSrc} alt={caption}/>
    <figcaption className="text-brand text-xs font-light mt-2 px-4">
      {caption}
    </figcaption>
  </figure>
  )
}

export default FoodFigure
