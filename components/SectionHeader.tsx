import React from 'react'

interface Props {
  title: string
  id: string
}

const SectionHeader = ({ id, title }: Props): JSX.Element => {
  return (
    <>
    <h2 className="text-brand text-center text-3xl font-medium mt-12" id={id}> {title}</h2>
    <div className="flex justify-center mx-28 mb-8">
      <hr className="border-brand w-3/4"/>
    </div>
    </>
  )
}

export default SectionHeader
