import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CommentIcon from '@/assets/icon/comment-icon.svg'
import { Popover, Typography } from '@mui/material'
import { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import GifBoxIcon from '@mui/icons-material/GifBox'
import ListIcon from '@mui/icons-material/List'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { blue } from '@mui/material/colors'

interface Props {
  openDialog: boolean
  closeDialog: boolean
  width: number
  height: number
  textSize: number
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  border: '1px',
  borderRadius: '16px',
}))

export default function CustomizedDialogs(props: Props) {
  const [open, setOpen] = React.useState(false)
  const [countRePost, setCountRePost] = useState(0)

  const id = open ? 'simple-popover' : undefined
  const handleClickOpen = () => {
    setOpen(props.openDialog)
  }
  const handleClose = () => {
    setOpen(props.closeDialog)
  }

  return (
    <div>
      <button
        className="mt-[6px]  flex text-[#71767B] hover:text-violet-600"
        aria-describedby={id}
        onClick={handleClickOpen}
      >
        <div className="cursor-pointer flex">
          <CommentIcon
            className="hover:fill-violet-600 "
            height={props.height}
            width={props.width}
          />
          <div className={`text-[${props.textSize}px] ml-1`}>{countRePost}</div>
        </div>
      </button>

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            backgroundColor: 'rgba(91, 112, 131, 0.4)',
            border: '1px',
            borderRadius: '16px',
          }}
        >
          <div className="flex bg-black px-3 pb-2 ">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: '',
                right: 8,
                top: 8,
                // color: (theme) => theme.palette.white[500],
                color: 'white',
              }}
              style={{
                borderRadius: '16px',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="bg-black text-white ">
            <DialogContent dividers>
              <div className="w-[550px]">
                <div className="flex">
                  <div className="flex flex-col rounded-full px-2 py-1   w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1696879451716-935355900aad?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                      alt={`avatar`}
                      className="w-[42px] h-[40px] rounded-full"
                    />
                    {/* <div className=" ">
                      <hr className="w-full  rotate-90 mt-6 " />
                    </div> */}
                  </div>
                  <div className="flex flex-col  w-[500px]">
                    <div className="flex mb-1">
                      <div className=" font-bold  ">Khoa Vu</div>
                      <div className="ml-2 text-[#74767B]">22m</div>
                    </div>
                    <div className="text-[15px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit repudiandae in quos enim rem earum. Incidunt
                      debitis magni voluptates, illum aspernatur ad voluptate
                      voluptas aliquid officiis consequatur necessitatibus unde
                      laudantium?
                    </div>
                    <div>
                      post to{' '}
                      <span className="text-blue-500">@khoavu@5121</span>
                    </div>
                  </div>
                </div>
                <div className="w-[550px] mt-4 ">
                  <div className="flex">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1696879451716-935355900aad?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                      alt={`avatar`}
                      className="w-[42px] h-[40px] rounded-full"
                    />
                    <textarea
                      className="bg-transparent outline-none w-[500px] ml-4 p-3 text-[18px] resize-none"
                      placeholder="Reply"
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
          <div className="bg-black">
            <DialogActions>
              <div className="flex justify-between w-full">
                <div className="mt-4 flex w-[40%] justify-between">
                  <div>
                    <ImageIcon
                      fontSize="small"
                      sx={{ color: blue[500] }}
                    />
                  </div>
                  <div>
                    <GifBoxIcon
                      fontSize="small"
                      sx={{ color: blue[500] }}
                    />
                  </div>
                  <div>
                    <ListIcon
                      fontSize="small"
                      sx={{ color: blue[500] }}
                    />
                  </div>
                  <div>
                    <SentimentSatisfiedIcon
                      fontSize="small"
                      sx={{ color: blue[500] }}
                    />
                  </div>
                  <div>
                    <PendingActionsIcon
                      fontSize="small"
                      sx={{ color: blue[500] }}
                    />
                  </div>
                  <div>
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ color: blue[500] }}
                    />
                  </div>
                </div>
              </div>
              <button
                autoFocus
                onClick={handleClose}
                className=" px-4 py-2 my-2 rounded-2xl bg-blue-600 mr-4 text-white mt-4"
              >
                Reply
              </button>
            </DialogActions>
          </div>
        </BootstrapDialog>
      </div>
    </div>
  )
}
