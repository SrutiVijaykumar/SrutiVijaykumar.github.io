import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  imgSrc: StaticImageData
  title: string
  description: string
  alignRight?: boolean
}

const InspirationCard = ({ alignRight = false, imgSrc, title, description }: Props): JSX.Element => {
  return (
    <div className={`grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-4 place-items-center ${alignRight ? 'lg:text-right' : ''}`}>
      <div className={`col-span-1 ${alignRight ? 'order-first' : 'sm:order-1 order-last'}`}>
          <Image className='shadow-xl border-white border-8' src={imgSrc} alt={title}/>
      </div>
      <div className={`col-span-1 ${alignRight ? 'pl-4' : 'pr-4'}`}>
        <h3 className="text-brand font-bold text-lg">{title} </h3>
        <p className="font-light">{description}</p>
      </div>
    </div>
  )
}

export default InspirationCard
