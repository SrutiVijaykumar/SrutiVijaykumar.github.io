import React from 'react'
import Image from 'next/image'

const DownArrowSvg = (): JSX.Element => {
  return (
    <Image alt="down arrow object" className="my-4" src="/images/down-arrow-svgrepo-com.svg" width={50} height={50}/>
  )
}

export default DownArrowSvg
