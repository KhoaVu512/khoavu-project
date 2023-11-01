import ImageIcon from '@mui/icons-material/Image'
import GifBoxIcon from '@mui/icons-material/GifBox'
import ListIcon from '@mui/icons-material/List'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { blue } from '@mui/material/colors'

function MenuPost() {
  return (
    <div className="flex justify-between w-full">
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
  )
}

export default MenuPost
