import FeedPage from '@/app/twitter/feed/page'
import Trending from '@/app/twitter/components/layout/trending'

function Twitter() {
  return (
    <main className='flex w-[990px] relative'>
      <FeedPage /> 
      <Trending />
    </main>
  )
}

export default Twitter