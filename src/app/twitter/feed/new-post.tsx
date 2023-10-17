import ImageIcon from '@mui/icons-material/Image'
import GifBoxIcon from '@mui/icons-material/GifBox'
import ListIcon from '@mui/icons-material/List'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { blue } from '@mui/material/colors'

function NewPots() {
  return (
    <div className="flex mt-3 mb-4 w-full">
      <div className="flex rounded-full mx-4  w-[calc(100% - 4px)] h-[calc(100% - 4px)] mr-4">
        <img
          src="/images/avatar-demo1.png"
          alt={'avatar user'}
          className="w-[47px] h-[40px] rounded-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="">
          <input
            type="text"
            className="border-none bg-transparent outline-none w-[90%] text-[20px]"
            placeholder="What is happening?!"
          />
        </div>
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
          <button className=" px-4 py-1 rounded-2xl bg-blue-600 mr-4">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
export default NewPots
