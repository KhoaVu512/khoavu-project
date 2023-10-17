import * as React from 'react';
import CommentIcon from '@/assets/icon/comment-icon.svg'
import { Popover, Typography } from '@mui/material'
import { useState } from 'react'

interface Props {
  width: number,
  height: number,
  textSize: number
}

function CommentPost(Props: Props) {
  const [countRePost, setCountRePost] = useState(0)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
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
        <div className='text'>The content of the Popover.</div>
      </Popover>
      
    <button
      className="mt-[6px]  flex text-[#71767B] hover:text-violet-600"
      aria-describedby={id} onClick={handleClick}
    >
      <div className="cursor-pointer flex">
        <CommentIcon className="hover:fill-violet-600 " height={Props.height} width={Props.width}/>
        <div className={`text-[${Props.textSize}px] ml-1`}>{countRePost}</div>
      </div>

      
    </button>
    </div>

    
  )
}

export default CommentPost
