import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  ordered?: boolean
}

const SectionList = ({ children, ordered = false }: Props): JSX.Element => {
  if (ordered) {
    return (
      <ol className="list-inside list-decimal mx-6">
        {children}
      </ol>
    )
  } else {
    return (
      <ul className="list-inside list-disc mx-6">
        {children}
      </ul>
    )
  }
}

export default SectionList
