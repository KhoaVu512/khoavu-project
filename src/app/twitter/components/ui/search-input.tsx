import { PropsWithChildren, useMemo, useState } from 'react'
import SearchSmall from 'assets/icon/search-small.svg'
import Popover from '@mui/material/Popover/Popover'
import Typography from '@mui/material/Typography/Typography'
import Stack from '@mui/material/Stack/Stack'
import Autocomplete from '@mui/material/Autocomplete/Autocomplete'
import TextField from '@mui/material/TextField/TextField'

interface Props {
  widthInput: string
}

function SearchInput(Props: PropsWithChildren<Props>) {
  const searchInput = useMemo(
    () => (
      <input
        type="text"
        className=" w-full bg-[#202327] ml-6 mr-4 focus:outline-none"
        placeholder="Search"
      />
    ),
    []
  )

  return (
    <label
      className={`flex w-[${Props.widthInput}] h-[40px] mt-2 bg-[#202327] rounded-full focus:border-blue-600 focus:fill-blue-900 focus:border-[2px]`}
    >
      <div className="flex ml-4 items-center">
        <SearchSmall />{' '}
      </div>

      <div className="w-full h-full flex justify-center items-center bg-[rgb(22, 24, 28]">
      <input
        type="text"
        className=" w-full bg-[#202327] ml-6 mr-4 focus:outline-none"
        placeholder="Search"
        autoComplete='123123'
      />
      </div>
     
    </label>
  )
}

export default SearchInput
