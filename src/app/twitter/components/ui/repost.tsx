import RePostIcon from '@/assets/icon/repost-icon.svg'
import * as React from 'react'
import CommentIcon from '@/assets/icon/comment-icon.svg'
import { Popover, Typography } from '@mui/material'
import { useState } from 'react'

interface Props {
  width: number
  height: number,
  textSize: number
}

function RePost(Props: Props) {
  const [countRePost, setCountRePost] = useState(0)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className=" bg-black w-24 h-16 justify-center flex flex-col items-center">
          <div className="text-white">Repost</div>
          <div className="text-white">quote</div>
        </div>
      </Popover>

      <button
        className="mt-[6px]  flex text-[#71767B] hover:text-violet-600"
        aria-describedby={id}
        onClick={handleClick}
      >
        <div className="cursor-pointer flex">
          <RePostIcon className="hover:fill-violet-600" height={Props.height} width={Props.width}/>
          <div className={`text-[${Props.textSize}px] ml-1`}>{countRePost}</div>
        </div>
      </button>
    </div>
  )
}

export default RePost
