'use client'

import { Fragment, PropsWithChildren } from 'react'
import MenuBar from '@/app/twitter/components/layout/menu-bar'

function Layout(props: PropsWithChildren) {
  return (
    <Fragment>
      <header className=" w-[275px] h-screen flex flex-col ">
        <MenuBar></MenuBar>
      </header>

      <main className="w-[990px] relative">{props.children}</main>
    </Fragment>
  )
}

export default Layout
