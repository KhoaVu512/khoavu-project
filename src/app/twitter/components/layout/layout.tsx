'use client'

import { Fragment, PropsWithChildren } from 'react'
import MainHeader from '@/app/twitter/components/layout/main-header'

function Layout(props: PropsWithChildren) {
  return (
    <Fragment>
      <header className=" w-[275px] h-screen flex flex-col">
        <MainHeader></MainHeader>
      </header>
      <main className="w-[990px]">{props.children}</main>
    </Fragment>
  )
}

export default Layout
