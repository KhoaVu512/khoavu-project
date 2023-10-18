'use client'
import Trending from '@/app/twitter/components/layout/trending'
import ContainerSearch from '@/app/twitter/search/container-search'

function Search() {
  return (
    <div className='flex w-[990px] relative'>
      <ContainerSearch />
      <Trending />
    </div>
  )
}

export default Search
