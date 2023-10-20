import { PropsWithChildren, useMemo, useState } from 'react'
import SearchSmall from 'assets/icon/search-small.svg'
import Popover from '@mui/material/Popover/Popover'
import Typography from '@mui/material/Typography/Typography'

interface Props {
  widthInput: string
}

function SearchInput(Props: PropsWithChildren<Props>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLInputElement>(null)

  const handleClick = (event: React.FocusEvent<HTMLInputElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  const searchInput = useMemo(
    () => (
      <input
        type="text"
        className=" w-full bg-[#202327] ml-6 mr-4 focus:outline-none"
        placeholder="Search"
        onFocus={handleClick}
      />
    ),
    []
  )

  return (
    <div
      className={`flex w-[${Props.widthInput}] h-[40px] mt-2 bg-[#202327] rounded-full focus:border-blue-600 focus:border-[2px]`}
    >
      <div className="flex ml-4 items-center">
        <SearchSmall />{' '}
      </div>

      <div className="w-full h-full flex justify-center items-center bg-[rgb(22, 24, 28]">
        {searchInput}
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  )
}

export default SearchInput
