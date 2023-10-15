'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'
interface Props {
  link: string
}

function ButtonLogo(props: PropsWithChildren<Props>) {
  return (
    <div className="hover:bg-gray-800 border-none rounded-full flex justify-center items-center w-[50px] h-[50px]">
      <Link href={props.link}>
        <div>{props.children}</div>
      </Link>
    </div>
  )
}

export default ButtonLogo
