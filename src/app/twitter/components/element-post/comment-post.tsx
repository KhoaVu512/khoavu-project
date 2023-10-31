import * as React from 'react'
import CommentIcon from '@/assets/icon/comment-icon.svg'
import { Popover, Typography } from '@mui/material'
import { useState } from 'react'
import CustomizedDialogs from '@/app/twitter/components/popup/popopver-comment'

interface Props {
  width: number
  height: number
  textSize: number
}

function CommentPost(props: Props) {
  const openDialog = true
  const closeDialog = false

  return (
    <div>
      <div className="text">
        <CustomizedDialogs
          openDialog={openDialog}
          closeDialog={closeDialog}
          height={props.height}
          width={props.width}
          textSize={props.textSize}
        />{' '}
      </div>
    </div>
  )
}

export default CommentPost
