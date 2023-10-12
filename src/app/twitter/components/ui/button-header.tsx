'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface Props {
  content: string
  link: string
}

function ButtonHeader(props: PropsWithChildren<Props>) {
  return (
    <div className="hover:bg-gray-800 border-none rounded-full flex items-center justify-center w-fit h-[50px] mt-[10px]">
      <Link href={props.link}>
        <div className="flex mx-[12px]">
          {props.children}{' '}
          <div className="text-[20px] ml-[16px] font-bold">{props.content}</div>
        </div>
      </Link>
    </div>
  )
}

export default ButtonHeader
