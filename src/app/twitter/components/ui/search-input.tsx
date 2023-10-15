import { PropsWithChildren } from 'react'
import SearchSmall from 'assets/icon/search-small.svg'

function SearchInput(props: PropsWithChildren) {
  return (
    <div className="flex w-[350px] h-[40px] mt-2 bg-[#202327] rounded-full focus:border-blue-600 focus:border-[2px]">
      <div className="flex ml-4 items-center">
        <SearchSmall />{' '}
      </div>

      <div className="w-full h-full flex justify-center items-center bg-[rgb(22, 24, 28]">
        <input
          type="text"
          className=" w-full bg-[#202327] ml-6 mr-4 focus:outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default SearchInput
