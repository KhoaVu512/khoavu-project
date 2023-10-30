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

const options = ['Option 1', 'Option 2']

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

      {/* <div className="w-full h-full flex justify-center items-center bg-[rgb(22, 24, 28]">
      <input
        type="text"
        className=" w-full bg-[#202327] ml-6 mr-4 focus:outline-none"
        placeholder="Search"
        autoComplete='123123'
      />
      </div> */}
      <div className="w-full h-full flex justify-center items-center bg-transparent mx-2 text-[white]">
        <Autocomplete
          fullWidth
          sx={{
            display: 'inline-block',
            border: 'none',
            color: '#FFFFFF',
            '& input': {
              width: '100%',
              height: '36px',
              bgcolor: 'transparent',
              outline: 'none',

              border: 'none',
            },
          }}
          id="custom-input-demo"
          options={options}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                type="text"
                {...params.inputProps}
              />
            </div>
          )}
        />
        {''}
      </div>
    </label>
  )
}

export default SearchInput
