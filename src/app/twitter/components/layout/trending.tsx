'use client'
import SearchInput from '@/app/twitter/components/ui/search-input'
import Trending from '@/app/twitter/components/ui/trending'
import WhoFollow from '@/app/twitter/components/ui/who-follow'

function MainTrending() {
  return (
    <div className="relative">
      <div className="flex w-[350px] ml-[40px] fixed flex-col overflow-y-auto hover:overflow-y-hidden">
        <div className="w-full ">
          <SearchInput widthInput={'350px'} />
        </div>
        <div className="">
          <div className="">
            <Trending background="#202327" />
            <WhoFollow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainTrending
