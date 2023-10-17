import FeedPage from '@/app/twitter/feed/page'
import Trending from '@/app/twitter/components/layout/trending'
import { PropsWithChildren } from 'react'

function Twitter(Props: PropsWithChildren) {
  return (
    <main className='flex w-[990px] relative'>
      <FeedPage /> 
      <Trending />
    </main>
  )
}

export default Twitter