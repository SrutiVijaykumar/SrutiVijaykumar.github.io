import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  title?: string
}

const ProjectSubSection = ({ children, title }: Props): JSX.Element => {
  return (
    <section className="my-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <div>{children}</div>
    </section>
  )
}

export default ProjectSubSection
