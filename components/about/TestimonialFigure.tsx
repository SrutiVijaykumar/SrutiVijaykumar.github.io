import React from 'react'
import { Testimonial } from '../../types'

interface Props {
  key: number
  testimonial: Testimonial
}
const TestimonialFigure = ({ testimonial }: Props): JSX.Element => {
  return (
    <figure className="font-light text-xs px-4 mb-8">
      <blockquote className="mb-4">
        &quot;{testimonial.excerpt}&quot;
      </blockquote>
      <figcaption className="my-2 font-normal">
        {testimonial.name}
        <br/>
        {testimonial.job_title}
      </figcaption>
    </figure>
  )
}

export default TestimonialFigure
