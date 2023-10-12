'use client'
import SearchInput from '@/app/twitter/components/ui/search-input'
import Trending from '@/app/twitter/components/ui/trending'


function MainTrending() {
  return (
    <div className="flex w-[350px] flex-1 ml-[40px] flex-col">
      <SearchInput />
      
      <Trending />
    </div>
  )
}

export default MainTrending
