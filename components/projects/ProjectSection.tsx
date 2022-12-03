import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  title?: string
}

const ProjectSection = ({ children, title }: Props): JSX.Element => {
  return (
    <section className="my-8">
      <h2 className="text-2xl text-brand font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  )
}
export default ProjectSection
