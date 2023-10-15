'use client'
import SearchInput from '@/app/twitter/components/ui/search-input'
import Trending from '@/app/twitter/components/ui/trending'
import WhoFollow from '@/app/twitter/components/ui/who-follow'

function MainTrending() {
  return (
    <div className="relative">
      <div className="flex w-[350px] ml-[40px] flex-col fixed">
        <SearchInput />
        <Trending />
        <WhoFollow />
      </div>
    </div>
  )
}

export default MainTrending
